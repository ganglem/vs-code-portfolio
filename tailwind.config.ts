import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surface tonal layers — backed by CSS variables (dark/light aware)
        background:                    'var(--bg-editor)',
        surface:                       'var(--bg-editor)',
        'surface-dim':                 'var(--bg-1)',
        'surface-bright':              'var(--bg-4)',
        'surface-container-lowest':    'var(--bg-0)',
        'surface-container-low':       'var(--bg-1)',
        'surface-container':           'var(--bg-2)',
        'surface-container-high':      'var(--bg-3)',
        'surface-container-highest':   'var(--bg-4)',
        'surface-variant':             'var(--bg-4)',
        'on-surface':                  'var(--text-main)',
        'on-surface-variant':          'var(--text-sub)',
        'on-background':               'var(--text-main)',
        'inverse-surface':             'var(--text-main)',
        'inverse-on-surface':          'var(--text-inv)',
        // Primary
        primary:                       'var(--clr-primary)',
        'primary-container':           'var(--clr-primary-container)',
        'primary-fixed':               'var(--clr-primary)',
        'primary-fixed-dim':           'var(--clr-primary)',
        'on-primary':                  'var(--clr-on-primary)',
        'on-primary-container':        'var(--clr-on-primary-container)',
        'on-primary-fixed':            'var(--clr-on-primary)',
        'on-primary-fixed-variant':    'var(--clr-on-primary)',
        'inverse-primary':             'var(--clr-primary)',
        'surface-tint':                'var(--clr-primary)',
        // Secondary
        secondary:                     'var(--clr-secondary)',
        'secondary-container':         'var(--clr-secondary-container)',
        'secondary-fixed':             'var(--clr-secondary)',
        'secondary-fixed-dim':         'var(--clr-secondary)',
        'on-secondary':                'var(--clr-on-secondary)',
        'on-secondary-container':      'var(--clr-on-secondary-container)',
        'on-secondary-fixed':          'var(--clr-on-secondary)',
        'on-secondary-fixed-variant':  'var(--clr-on-secondary)',
        // Tertiary
        tertiary:                      'var(--clr-tertiary)',
        'tertiary-container':          'var(--clr-tertiary-container)',
        'tertiary-fixed':              'var(--clr-tertiary)',
        'tertiary-fixed-dim':          'var(--clr-tertiary)',
        'on-tertiary':                 'var(--clr-on-tertiary)',
        'on-tertiary-container':       'var(--clr-on-tertiary-container)',
        'on-tertiary-fixed':           'var(--clr-on-tertiary)',
        'on-tertiary-fixed-variant':   'var(--clr-on-tertiary)',
        // Error
        error:                         'var(--clr-error)',
        'error-container':             'var(--clr-error-container)',
        'on-error':                    'var(--clr-on-error)',
        'on-error-container':          'var(--clr-on-error-container)',
        // Borders — RGB channels so Tailwind /opacity modifiers work (e.g. /20)
        outline:          'rgb(var(--clr-outline-rgb) / <alpha-value>)',
        'outline-variant': 'rgb(var(--clr-outline-variant-rgb) / <alpha-value>)',
      },
      fontFamily: {
        // Sans-serif: SF Pro (self-hosted) with system-ui fallback
        sans: [
          'SF Pro Display',
          'SF Pro Text',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        // Monospace: JetBrains Mono (via next/font/google CSS variable)
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'monospace'],
        // Headline alias for explicit display usage
        headline: [
          'SF Pro Display',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0.25rem',
        md: '0px',
        lg: '0px',
        xl: '0.5rem',
        '2xl': '0px',
        '3xl': '0px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
