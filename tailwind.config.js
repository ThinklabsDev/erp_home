/**
 * Tailwind config mapping CSS variables to utility colors.
 * Allows using classes like `bg-primary`, `text-primary`, `border-primary`.
 */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}',
    './app/**/*.{js,ts,jsx,tsx,html}',
    './components/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        border: 'var(--border)',
        success: 'var(--chart-2)',
        warning: 'var(--chart-3)',
        danger: 'var(--destructive)',
        slate: {
          900: 'var(--foreground)',
          600: 'var(--muted-foreground)'
        }
      },
      borderColor: theme => ({
        DEFAULT: 'var(--border)'
      }),
      ringColor: theme => ({
        DEFAULT: 'var(--ring)'
      })
    }
  },
  corePlugins: {
    preflight: true, // Enable Tailwind Preflight to match terp (CDN behavior)
  },
  plugins: []
};
