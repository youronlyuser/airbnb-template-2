
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))'
        },
        // Theme colors - centralized here for easy customization
        theme: {
          primary: {
            DEFAULT: 'var(--color-theme-primary)',
            light: 'var(--color-theme-primary-light)',
            dark: 'var(--color-theme-primary-dark)',
            muted: 'var(--color-theme-primary-muted)',
          },
          secondary: {
            DEFAULT: 'var(--color-theme-secondary)',
            light: 'var(--color-theme-secondary-light)',
          },
          background: {
            DEFAULT: 'var(--color-theme-background)',
            alt: 'var(--color-theme-background-alt)',
          },
          text: {
            DEFAULT: 'var(--color-theme-text)',
            muted: 'var(--color-theme-text-muted)',
            light: 'var(--color-theme-text-light)',
          },
          accent: {
            DEFAULT: 'var(--color-theme-accent)',
            light: 'var(--color-theme-accent-light)',
          },
          footer: {
            bg: 'var(--color-theme-footer-bg)',
            text: 'var(--color-theme-footer-text)',
            link: 'var(--color-theme-footer-link)',
            linkHover: 'var(--color-theme-footer-link-hover)',
            border: 'var(--color-theme-footer-border)',
          },
          gallery: {
            bg: 'var(--color-theme-gallery-bg)',
            card: 'var(--color-theme-gallery-card)',
            button: 'var(--color-theme-gallery-button)',
            buttonHover: 'var(--color-theme-gallery-button-hover)',
          },
          explore: {
            bg: 'var(--color-theme-explore-bg)',
            cardBg: 'var(--color-theme-explore-card-bg)',
            cardBorder: 'var(--color-theme-explore-card-border)',
            icon: 'var(--color-theme-explore-icon)',
          },
          yourplace: {
            bg: 'var(--color-theme-yourplace-bg)',
            tab: 'var(--color-theme-yourplace-tab)',
            tabActive: 'var(--color-theme-yourplace-tab-active)',
            amenityBg: 'var(--color-theme-yourplace-amenity-bg)',
            amenityIcon: 'var(--color-theme-yourplace-amenity-icon)',
          },
          host: {
            bg: 'var(--color-theme-host-bg)',
            cardBg: 'var(--color-theme-host-card-bg)',
            testimonialBg: 'var(--color-theme-host-testimonial-bg)',
            testimonialBorder: 'var(--color-theme-host-testimonial-border)',
            badge: 'var(--color-theme-host-badge)',
          },
          navbar: {
            bg: 'var(--color-theme-navbar-bg)',
            bgTransparent: 'var(--color-theme-navbar-bg-transparent)',
            text: 'var(--color-theme-navbar-text)',
            active: 'var(--color-theme-navbar-active)',
            hover: 'var(--color-theme-navbar-hover)',
            button: 'var(--color-theme-navbar-button)',
            buttonHover: 'var(--color-theme-navbar-button-hover)',
            mobileBg: 'var(--color-theme-navbar-mobile-bg)',
            shadow: 'var(--color-theme-navbar-shadow)',
          }
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
      },
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
