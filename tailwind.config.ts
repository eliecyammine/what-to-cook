import type { Config } from 'tailwindcss';
import defaultTheme, { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  darkMode: ['class'],

  safelist: ['dark', 'light'],

  prefix: '',

  theme: {
    screens: {
      xs: '350px',
      ...defaultTheme.screens,
    },

    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },

        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },

        success: {
          DEFAULT: 'hsl(var(--success))',
          foreground: 'hsl(var(--success-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        warning: {
          DEFAULT: 'hsl(var(--warning))',
          foreground: 'hsl(var(--warning-foreground))',
        },
        info: {
          DEFAULT: 'hsl(var(--info))',
          foreground: 'hsl(var(--info-foreground))',
        },

        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },

      borderRadius: {
        xl: 'calc(var(--radius) + 4px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      fontFamily: {
        'flowless-logo': ['var(--font-flowless-logo)', ...fontFamily.sans],
        logo: ['var(--font-logo)', ...fontFamily.sans],
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
        mono: ['var(--font-geist-mono)', ...fontFamily.sans],
      },

      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
          },
        },

        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },

        spotlight: {
          '0%': {
            opacity: '0',
            transform: 'translate(-72%, -62%) scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, -40%) scale(1)',
          },
        },

        'fade-in': {
          '0%': {
            opacity: '0%',
          },
          '40%': {
            opacity: '100%',
          },
          '100%': {
            opacity: '100%',
          },
        },
        'fade-up': {
          '0%': {
            transform: 'translateY(16%)',
            opacity: '0%',
          },
          '30%': {
            transform: 'translateY(0%)',
            opacity: '100%',
          },
          '100%': {
            opacity: '100%',
          },
        },
        'fade-down': {
          '0%': {
            transform: 'translateY(-16%)',
            opacity: '0%',
          },
          '30%': {
            transform: 'translateY(0%)',
            opacity: '100%',
          },
          '100%': {
            opacity: '100%',
          },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',

        spotlight: 'spotlight 2s ease .75s 1 forwards',

        'fade-in': 'fade-in 2s ease-in-out forwards',
        'fade-up': 'fade-up 2s ease-in-out forwards',
        'fade-down': 'fade-down 2s ease-in-out forwards',
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
};

export default config;
