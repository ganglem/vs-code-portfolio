const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

interface Logo {
  name: string
  src: string
  invert?: boolean
}

const LOGOS: Logo[] = [
  { name: 'TypeScript',    src: `${CDN}/typescript/typescript-original.svg` },
  { name: 'Python',        src: `${CDN}/python/python-original.svg` },
  { name: 'JavaScript',    src: `${CDN}/javascript/javascript-original.svg` },
  { name: 'Java',          src: `${CDN}/java/java-original.svg` },
  { name: 'React',         src: `${CDN}/react/react-original.svg` },
  { name: 'Next.js',       src: `${CDN}/nextjs/nextjs-original.svg`,    invert: true },
  { name: 'Tailwind CSS',  src: `${CDN}/tailwindcss/tailwindcss-original.svg` },
  { name: 'Three.js',      src: `${CDN}/threejs/threejs-original.svg`,   invert: true },
  { name: 'Docker',        src: `${CDN}/docker/docker-original.svg` },
  { name: 'Git',           src: `${CDN}/git/git-original.svg` },
  { name: 'Figma',         src: `${CDN}/figma/figma-original.svg` },
  { name: 'Illustrator',   src: `${CDN}/illustrator/illustrator-plain.svg` },
  { name: 'Photoshop',     src: `${CDN}/photoshop/photoshop-plain.svg` },
  { name: 'Kali Linux',    src: `${CDN}/kalilinux/kalilinux-plain.svg`,  invert: true },
  { name: 'Linux',         src: `${CDN}/linux/linux-original.svg` },
  { name: 'Bash',          src: `${CDN}/bash/bash-original.svg`,         invert: true },
]

export function LogoLoop() {
  const track = [...LOGOS, ...LOGOS] // duplicate for seamless loop

  return (
    <div className="overflow-hidden w-full" aria-hidden>
      <div
        className="flex gap-8 w-max"
        style={{ animation: 'marquee 35s linear infinite' }}
      >
        {track.map((logo, i) => (
          <div key={i} className="shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logo.src}
              alt={logo.name}
              width={32}
              height={32}
              className={`opacity-70 ${logo.invert ? 'invert' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
