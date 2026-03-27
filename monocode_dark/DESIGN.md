# Design System Document

## 1. Overview & Creative North Star

### The Creative North Star: "The Precision Compiler"
This design system is not merely a dark-themed UI; it is an ode to the architectural beauty of code. It treats digital space like a high-performance engine room—technical, uncompromising, and flawlessly organized. We are moving beyond the standard "IDE clone" to create a **high-end editorial environment** for power users. 

By stripping away the "visual noise" of rounded corners and traditional borders, we lean into **Organic Brutalism**. The system relies on intentional asymmetry, drastic typographic scale shifts, and tonal depth to guide the eye. It is designed to feel like a custom-tooled instrument, where every pixel serves a functional purpose while maintaining a premium, "gallery-grade" aesthetic.

---

## 2. Colors

The palette is rooted in the deep obsidian tones of a sophisticated coding environment, punctuated by vibrant, syntax-inspired accents that provide semantic meaning.

### Surface Palette
*   **Primary Surface:** `#131313` (Surface Dim) – The foundational "void" of the editor.
*   **Sidebar Surface:** `#333333` (Surface Variant) – A distinct tonal shift to define navigation without lines.
*   **Status/Activity Base:** `#0e0e0e` (Surface Container Lowest) – The heaviest grounding elements.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are prohibited for sectioning. Boundaries must be defined exclusively through background color shifts. 
*   To separate the Sidebar from the Editor, place a `surface_variant` (`#333333`) container directly against the `surface` (`#131313`) background.
*   The transition itself creates the "line." This maintains a seamless, architectural feel.

### The Glass & Gradient Rule
Floating elements (Command Palettes, Tooltips) should utilize **Glassmorphism**. Use `surface_container_highest` at 85% opacity with a `20px` backdrop blur. 
*   **Signature Sheen:** For primary CTAs or active states, apply a subtle linear gradient: `primary` (`#95ccff`) to `primary_container` (`#569cd6`). This provides a "lathed metal" polish that flat color cannot replicate.

---

## 3. Typography

The typography strategy pairs the technical rigors of monospace with the wide, authoritative stance of modern grotesque fonts.

*   **Display & Headlines (Space Grotesk):** Used for high-level navigation and section headers. Its wide apertures and geometric construction provide a sophisticated, editorial "voice."
    *   *Headline-LG:* `2rem` / Tracking: `-0.02em` / Weight: Bold.
*   **The Technical Core (JetBrains Mono / Fira Code):** Every piece of user-generated content or data must be rendered in monospace. This reinforces the "Precision Compiler" identity.
    *   *Body-MD:* `0.875rem` / Leading: `1.5` / Weight: Regular.
*   **Semantic Highlighting:**
    *   **Variables:** `primary` (`#95ccff`)
    *   **Keywords:** `primary_container` (`#569cd6`)
    *   **Strings:** `tertiary` (`#fab79d`)
    *   **Numbers:** `secondary` (`#8fcff0`)

---

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering**. Depth is a function of "stacking" luminosity.

*   **The Layering Principle:** 
    1.  **Level 0 (Base):** `surface_container_lowest` (`#0e0e0e`) - The Status Bar.
    2.  **Level 1 (Workspace):** `surface` (`#131313`) - The main Editor area.
    3.  **Level 2 (Navigation):** `surface_container` (`#202020`) - Sidebar panels.
    4.  **Level 3 (Interactive):** `surface_container_high` (`#2a2a2a`) - Active tabs or hovered items.
*   **Ambient Shadows:** For floating modals (e.g., Search), use an ultra-diffused shadow: `offset: 0 20px, blur: 40px, color: rgba(0,0,0,0.5)`. 
*   **The "Ghost Border" Fallback:** If a container sits on a color of equal luminosity, use the `outline_variant` (`#40474f`) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Tabs
*   **Sharp Edges:** `0px` radius.
*   **Active State:** Background matches the editor (`#1e1e1e`). A `2px` top accent in `primary_container` (`#569cd6`) indicates focus.
*   **Inactive State:** Background `surface_container_low`. Text color `on_surface_variant` at 60% opacity.

### Activity Bar (Left Sidebar)
*   **Icons:** High-contrast `on_surface`. 
*   **Interaction:** On hover, icons should "glow" subtly by shifting to `primary`. The active icon receives a `2px` left-aligned "indicator" in `primary`.

### Buttons
*   **Primary:** Sharp `0px` corners. Gradient from `primary` to `primary_container`. Text in `on_primary` (Dark Blue).
*   **Tertiary:** No background. Monospace text with a "Ghost Border" that only appears on hover.

### Input Fields
*   **Visual Treatment:** A `surface_container_highest` background. No border.
*   **Cursor:** Use a block-style cursor (typical of terminal editors) in `primary` for that extra technical "bite."

### Cards & Lists
*   **Constraint:** Forbid divider lines.
*   **Separation:** Use the Spacing Scale `4` (`0.9rem`) to create "gutters" of negative space. Group related items by nesting them in a `surface_container_low` wrapper.

---

## 6. Do's and Don'ts

### Do
*   **Do** embrace the "Wall of Code" feel. High-density information is a feature, not a bug.
*   **Do** use extreme contrast in typography (Space Grotesk for titles vs. JetBrains Mono for data).
*   **Do** use `0.1rem` (Scale 0.5) spacing for micro-interactions to maintain a "tight" feel.

### Don't
*   **Don't** use a single pixel of border-radius. Every corner must be a perfect 90-degree angle.
*   **Don't** use pure `#FFFFFF` for body text. Use `on_surface_variant` (`#c0c7d1`) to reduce eye strain and maintain a premium, dimmed atmosphere.
*   **Don't** use "Generic Blue." Only use the `primary` tones defined by the syntax highlighting palette to ensure the app feels like an integrated ecosystem.