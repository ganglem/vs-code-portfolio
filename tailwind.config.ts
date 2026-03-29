import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  safelist: ['bg-skill-lang','bg-skill-fw','bg-skill-tools','bg-skill-domain'],
  theme: {
    extend: {
      colors: {
        // ── Surfaces ─────────────────────────────────────────────────────────
        // bg-surface, bg-surface-container-low, bg-surface-container-high, etc.
        // All auto-generate hover:, border-, text- variants — just use the name
        background:                  'var(--bg-editor)',
        surface:                     'var(--bg-editor)',
        'surface-container-lowest':  'var(--bg-0)',
        'surface-container-low':     'var(--bg-1)',
        'surface-container':         'var(--bg-2)',
        'surface-container-high':    'var(--bg-3)',
        'surface-container-highest': 'var(--bg-4)',
        'surface-dim':               'var(--bg-1)',
        'surface-bright':            'var(--bg-4)',
        'surface-variant':           'var(--bg-4)',

        // ── Text ──────────────────────────────────────────────────────────────
        // text-foreground   → main text (white in dark, near-black in light)
        // text-muted  → secondary / dimmed text
        // text-inv    → inverted (dark on light background)
        foreground: 'var(--text-main)',
        muted: 'var(--text-sub)',
        inv:   'var(--text-inv)',

        // ── Borders ───────────────────────────────────────────────────────────
        // border-subtle, border-subtle/20, border-subtle/30
        subtle: 'rgb(var(--subtle-rgb) / <alpha-value>)',

        // ── VS Code accent colors ─────────────────────────────────────────────
        // Named after their VS Code syntax role — but use anywhere you like
        // All support /opacity: bg-code-blue/20, border-code-orange/40 etc.
        'code-blue':   'rgb(var(--code-blue-rgb)   / <alpha-value>)',
        'code-teal':   'rgb(var(--code-teal-rgb)   / <alpha-value>)',
        'code-orange': 'rgb(var(--code-orange-rgb) / <alpha-value>)',
        'code-green':  'rgb(var(--code-green-rgb)  / <alpha-value>)',
        'code-yellow': 'rgb(var(--code-yellow-rgb) / <alpha-value>)',
        'code-purple': 'rgb(var(--code-purple-rgb) / <alpha-value>)',
        'code-red':    'rgb(var(--code-red-rgb)    / <alpha-value>)',

        // ── Skill bubble colors ───────────────────────────────────────────────
        // Fixed vivid colors — intentionally no dark/light variants
        'skill-lang':   'rgb(var(--code-blue-rgb)   / <alpha-value>)',
        'skill-fw':     'rgb(var(--code-red-rgb)    / <alpha-value>)',
        'skill-tools':  'rgb(var(--code-green-rgb)  / <alpha-value>)',
        'skill-domain': 'rgb(var(--code-purple-rgb) / <alpha-value>)',
      },
      fontFamily: {
        sans:     ['SF Pro Display', 'SF Pro Text', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono:     ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
        headline: ['SF Pro Display', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none:    '0px',
        sm:      '0.25rem',
        md:      '0px',
        lg:      '0px',
        xl:      '0.5rem',
        '2xl':   '0px',
        '3xl':   '0px',
        full:    '9999px',
      },
    },
  },
  plugins: [],
}

export default config
