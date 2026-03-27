import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surface tonal layers (darkest → lightest)
        background: '#131313',
        surface: '#131313',
        'surface-dim': '#131313',
        'surface-bright': '#393939',
        'surface-container-lowest': '#0e0e0e',
        'surface-container-low': '#1b1b1c',
        'surface-container': '#202020',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353535',
        'surface-variant': '#353535',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#c0c7d1',
        'on-background': '#e5e2e1',
        'inverse-surface': '#e5e2e1',
        'inverse-on-surface': '#303030',
        // Primary (blue — syntax variables/links)
        primary: '#95ccff',
        'primary-container': '#569cd6',
        'primary-fixed': '#cde5ff',
        'primary-fixed-dim': '#95ccff',
        'on-primary': '#003352',
        'on-primary-container': '#003150',
        'on-primary-fixed': '#001d32',
        'on-primary-fixed-variant': '#004a75',
        'inverse-primary': '#00639a',
        'surface-tint': '#95ccff',
        // Secondary (light blue — syntax numbers)
        secondary: '#8fcff0',
        'secondary-container': '#025976',
        'secondary-fixed': '#c1e8ff',
        'secondary-fixed-dim': '#8fcff0',
        'on-secondary': '#003548',
        'on-secondary-container': '#8fcef0',
        'on-secondary-fixed': '#001e2b',
        'on-secondary-fixed-variant': '#004d66',
        // Tertiary (peach/orange — syntax strings, markdown headers)
        tertiary: '#fab79d',
        'tertiary-container': '#c48870',
        'tertiary-fixed': '#ffdbcd',
        'tertiary-fixed-dim': '#fab79d',
        'on-tertiary': '#4e2513',
        'on-tertiary-container': '#4c2411',
        'on-tertiary-fixed': '#341103',
        'on-tertiary-fixed-variant': '#693b27',
        // Error
        error: '#ffb4ab',
        'error-container': '#93000a',
        'on-error': '#690005',
        'on-error-container': '#ffdad6',
        // Borders
        outline: '#8a919a',
        'outline-variant': '#40474f',
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
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        '3xl': '0px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
