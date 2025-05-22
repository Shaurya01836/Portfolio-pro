/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        customBlue: '#3B82F6',     // Tailwind's blue-500
        customorange: '#FB516D',
        foreground: '#FFFFFF',
        background: '#0D1117',     // Adjust this to match the dark bg

        // Replacing design token HSL values with actual colors
        border: '#E5E7EB',        // light gray
        input: '#F9FAFB',         // very light
        ring: '#3B82F6',          // blue-500

        primary: {
          DEFAULT: '#3B82F6',      // blue-500
          foreground: '#FFFFFF',  // white
        },
        secondary: {
          DEFAULT: '#6B7280',      // gray-500
          foreground: '#FFFFFF',  // white
        },
        destructive: {
          DEFAULT: '#EF4444',      // red-500
          foreground: '#FFFFFF',  // white
        },
        muted: {
          DEFAULT: '#F3F4F6',      // gray-100
          foreground: '#6B7280',   // gray-500
        },
        accent: {
          DEFAULT: '#D946EF',      // fuchsia-500
          foreground: '#FFFFFF',  // white
        },
        popover: {
          DEFAULT: '#F9FAFB',      // gray-50
          foreground: '#111827',   // gray-900
        },
        card: {
          DEFAULT: '#FFFFFF',      // white
          foreground: '#1F2937',   // gray-800
        },
      },
      borderRadius: {
        lg: '1rem',
        md: '0.875rem',
        sm: '0.75rem',
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
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
