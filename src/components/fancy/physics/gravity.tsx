// @ts-nocheck
"use client"

import {
  createContext,
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { calculatePosition } from "@/utils/calculate-position"
import { parsePathToVertices } from "@/utils/svg-path-to-vertices"
import Matter, {
  Bodies,
  Body,
  Common,
  Engine,
  Events,
  Mouse,
  MouseConstraint,
  Query,
  Render,
  Runner,
  World,
} from "matter-js"

import { cn } from "@/lib/utils"

type GravityProps = {
  children: ReactNode
  debug?: boolean
  gravity?: { x: number; y: number }
  grabCursor?: boolean
  addTopWall?: boolean
  autoStart?: boolean
  className?: string
}

type PhysicsBody = {
  element: HTMLElement
  body: Matter.Body
  props: MatterBodyProps
}

type MatterBodyProps = {
  children: ReactNode
  matterBodyOptions?: Matter.IBodyDefinition
  isDraggable?: boolean
  bodyType?: "rectangle" | "circle" | "svg"
  sampleLength?: number
  x?: number | string
  y?: number | string
  angle?: number
  className?: string
}

export type GravityRef = {
  start: () => void
  stop: () => void
  reset: () => void
}

const GravityContext = createContext<{
  registerElement: (id: string, element: HTMLElement, props: MatterBodyProps) => void
  unregisterElement: (id: string) => void
} | null>(null)

export const MatterBody = ({
  children,
  className,
  matterBodyOptions = { friction: 0.1, restitution: 0.1, density: 0.001, isStatic: false },
  bodyType = "rectangle",
  isDraggable = true,
  sampleLength = 15,
  x = 0,
  y = 0,
  angle = 0,
  ...props
}: MatterBodyProps) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const idRef = useRef(Math.random().toString(36).substring(7))
  const context = useContext(GravityContext)

  useEffect(() => {
    if (!elementRef.current || !context) return
    context.registerElement(idRef.current, elementRef.current, {
      children, matterBodyOptions, bodyType, sampleLength, isDraggable, x, y, angle, ...props,
    })
    return () => context.unregisterElement(idRef.current)
  }, [props, children, matterBodyOptions, isDraggable])

  return (
    <div ref={elementRef} className={cn("absolute", className, isDraggable && "pointer-events-none")}>
      {children}
    </div>
  )
}

const Gravity = forwardRef<GravityRef, GravityProps>(
  ({ children, debug = false, gravity = { x: 0, y: 1 }, grabCursor = true, addTopWall = true, autoStart = true, className, ...props }, ref) => {
    const canvas = useRef<HTMLDivElement>(null)
    const engine = useRef(Engine.create())
    const render = useRef<Render>(undefined)
    const runner = useRef<Runner>(undefined)
    const bodiesMap = useRef(new Map<string, PhysicsBody>())
    const frameId = useRef<number>(undefined)
    const mouseConstraint = useRef<Matter.MouseConstraint>(undefined)
    const mouseDown = useRef(false)
    const isRunning = useRef(false)
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 })

    // Refs to the four static wall bodies so we can reposition them on resize
    const wallsRef = useRef<{ floor: Matter.Body | null; right: Matter.Body | null; left: Matter.Body | null; top: Matter.Body | null }>({
      floor: null, right: null, left: null, top: null,
    })

    const registerElement = useCallback((id: string, element: HTMLElement, props: MatterBodyProps) => {
      if (!canvas.current) return
      const width = element.offsetWidth
      const height = element.offsetHeight
      const canvasRect = canvas.current.getBoundingClientRect()
      const angle = (props.angle || 0) * (Math.PI / 180)
      const x = calculatePosition(props.x, canvasRect.width, width)
      const y = calculatePosition(props.y, canvasRect.height, height)
      const renderStyle = { fillStyle: debug ? "#888888" : "#00000000", strokeStyle: debug ? "#333333" : "#00000000", lineWidth: debug ? 3 : 0 }

      let body
      if (props.bodyType === "circle") {
        body = Bodies.circle(x, y, Math.max(width, height) / 2, { ...props.matterBodyOptions, angle, render: renderStyle })
      } else if (props.bodyType === "svg") {
        const vertexSets = Array.from(element.querySelectorAll("path")).map((path) =>
          parsePathToVertices(path.getAttribute("d")!, props.sampleLength)
        )
        body = Bodies.fromVertices(x, y, vertexSets, { ...props.matterBodyOptions, angle, render: renderStyle })
      } else {
        body = Bodies.rectangle(x, y, width, height, { ...props.matterBodyOptions, angle, render: renderStyle })
      }

      if (body) {
        World.add(engine.current.world, [body])
        bodiesMap.current.set(id, { element, body, props })
      }
    }, [debug])

    const unregisterElement = useCallback((id: string) => {
      const entry = bodiesMap.current.get(id)
      if (entry) {
        World.remove(engine.current.world, entry.body)
        bodiesMap.current.delete(id)
      }
    }, [])

    const updateElements = useCallback(() => {
      bodiesMap.current.forEach(({ element, body }) => {
        const { x, y } = body.position
        const rotation = body.angle * (180 / Math.PI)
        element.style.transform = `translate(${x - element.offsetWidth / 2}px, ${y - element.offsetHeight / 2}px) rotate(${rotation}deg)`
      })
      frameId.current = requestAnimationFrame(updateElements)
    }, [])

    const initializeRenderer = useCallback(() => {
      if (!canvas.current) return
      const width = canvas.current.offsetWidth
      const height = canvas.current.offsetHeight

      Common.setDecomp(require("poly-decomp"))
      engine.current.gravity.x = gravity.x
      engine.current.gravity.y = gravity.y

      render.current = Render.create({
        element: canvas.current,
        engine: engine.current,
        options: { width, height, wireframes: false, background: "#00000000" },
      })

      const mouse = Mouse.create(render.current.canvas)
      mouseConstraint.current = MouseConstraint.create(engine.current, {
        mouse,
        constraint: { stiffness: 0.2, render: { visible: debug } },
      })

      const wallStyle = { isStatic: true, friction: 1, render: { visible: debug } }
      const floor    = Bodies.rectangle(width / 2,  height + 10, width + 40, 20, wallStyle)
      const rightWall = Bodies.rectangle(width + 10, height / 2,  20, height * 2, wallStyle)
      const leftWall  = Bodies.rectangle(-10,        height / 2,  20, height * 2, wallStyle)
      const topWall   = addTopWall ? Bodies.rectangle(width / 2, -10, width + 40, 20, wallStyle) : null

      wallsRef.current = { floor, right: rightWall, left: leftWall, top: topWall }

      const walls = [floor, rightWall, leftWall, ...(topWall ? [topWall] : [])]

      const touchingMouse = () =>
        Query.point(engine.current.world.bodies, mouseConstraint.current?.mouse.position || { x: 0, y: 0 }).length > 0

      if (grabCursor) {
        Events.on(engine.current, "beforeUpdate", () => {
          if (canvas.current) {
            canvas.current.style.cursor = mouseDown.current && touchingMouse() ? "grabbing" : touchingMouse() ? "grab" : "default"
          }
        })
        canvas.current.addEventListener("mousedown", () => { mouseDown.current = true })
        canvas.current.addEventListener("mouseup",   () => { mouseDown.current = false })
      }

      World.add(engine.current.world, [mouseConstraint.current, ...walls])
      render.current.mouse = mouse
      runner.current = Runner.create()
      Render.run(render.current)
      updateElements()
      runner.current.enabled = false

      if (autoStart) {
        runner.current.enabled = true
        startEngine()
      }

      setCanvasSize({ width, height })
    }, [updateElements, debug, autoStart, addTopWall])

    // Reposition walls live — no teardown, physics keeps running
    const repositionWalls = useCallback(() => {
      if (!canvas.current || !render.current) return
      const w = canvas.current.offsetWidth
      const h = canvas.current.offsetHeight

      // Resize the render canvas to match
      render.current.canvas.width = w
      render.current.canvas.height = h
      render.current.options.width = w
      render.current.options.height = h

      const { floor, right, left, top } = wallsRef.current
      if (floor)  Body.setPosition(floor,  { x: w / 2,  y: h + 10 })
      if (right)  Body.setPosition(right,  { x: w + 10, y: h / 2  })
      if (left)   Body.setPosition(left,   { x: -10,    y: h / 2  })
      if (top)    Body.setPosition(top,    { x: w / 2,  y: -10    })

    }, [])

    const clearRenderer = useCallback(() => {
      if (frameId.current) cancelAnimationFrame(frameId.current)
      if (mouseConstraint.current) World.remove(engine.current.world, mouseConstraint.current)
      if (render.current) {
        Mouse.clearSourceEvents(render.current.mouse)
        Render.stop(render.current)
        render.current.canvas.remove()
      }
      if (runner.current) Runner.stop(runner.current)
      if (engine.current) {
        World.clear(engine.current.world, false)
        Engine.clear(engine.current)
      }
      bodiesMap.current.clear()
    }, [])

    const startEngine = useCallback(() => {
      if (runner.current) { runner.current.enabled = true; Runner.run(runner.current, engine.current) }
      if (render.current) Render.run(render.current)
      frameId.current = requestAnimationFrame(updateElements)
      isRunning.current = true
    }, [updateElements])

    const stopEngine = useCallback(() => {
      if (!isRunning.current) return
      if (runner.current) Runner.stop(runner.current)
      if (render.current) Render.stop(render.current)
      if (frameId.current) cancelAnimationFrame(frameId.current)
      isRunning.current = false
    }, [])

    const reset = useCallback(() => {
      stopEngine()
      clearRenderer()
      initializeRenderer()
    }, [stopEngine, clearRenderer, initializeRenderer])

    useImperativeHandle(ref, () => ({ start: startEngine, stop: stopEngine, reset }), [startEngine, stopEngine, reset])

    // ResizeObserver on the canvas container — fires on sidebar toggle and window resize alike
    useEffect(() => {
      if (!canvas.current) return
      const observer = new ResizeObserver(() => repositionWalls())
      observer.observe(canvas.current)
      return () => observer.disconnect()
    }, [repositionWalls])

    useEffect(() => {
      initializeRenderer()
      return clearRenderer
    }, [initializeRenderer, clearRenderer])

    return (
      <GravityContext.Provider value={{ registerElement, unregisterElement }}>
        <div ref={canvas} className={cn(className, "absolute top-0 left-0 w-full h-full")}>
          {children}
        </div>
      </GravityContext.Provider>
    )
  }
)

Gravity.displayName = "Gravity"
export default Gravity
