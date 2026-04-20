/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: {
          DEFAULT: '#ff8b48',
          fg: '#050508',
        },
        secondary: {
          DEFAULT: '#ffc800',
          fg: '#050508',
        },

        // Accents
        accent: {
          cool: '#8b9cf7',
          violet: '#c4a0f7', // was misnamed --accent-warm
        },

        // Neutrals — one canonical token per value
        neutral: {
          0: '#ffffff',
          50: '#f5f5f7',
          900: '#091626',
          950: '#050508',
        },

        // Text
        text: {
          DEFAULT: '#e8e8ec',
          muted: 'rgba(232, 232, 236, 0.55)',
          dim: 'rgba(232, 232, 236, 0.30)',
          inverse: '#091626',
        },

        // Surfaces
        surface: {
          base: '#050508',
          elevated: '#091626',
          inverse: '#f5f5f7',
          'inverse-high': '#ffffff',
        },

        // Borders
        border: {
          subtle: '#ffffff14',
          accent: '#ff8b48',
        },

        // Semantic
        success: {
          DEFAULT: '#027a48',
          bg: '#ecfdf3',
        },
        error: {
          DEFAULT: '#b42318',
          bg: '#fef3f2',
        },
        warning: {
          // Not defined in source — placeholder for completeness
          DEFAULT: '#b54708',
          bg: '#fffaeb',
        },
      },

      fontFamily: {
        heading: ['"Cabinet Grotesk"', 'Arial', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        display: ['Unbounded', 'sans-serif'], // declared in source, currently unused
      },

      fontSize: {
        // [size, { lineHeight, letterSpacing, fontWeight }]
        display:  ['4.769rem', { lineHeight: '1.1',  letterSpacing: '-0.03em', fontWeight: '700' }],
        h1:       ['4rem',     { lineHeight: '1.1',  letterSpacing: '-0.025em', fontWeight: '700' }],
        h2:       ['3.5rem',   { lineHeight: '1.12', letterSpacing: '-0.03em', fontWeight: '700' }],
        h3:       ['2.5rem',   { lineHeight: '1.2',  letterSpacing: '-0.02em', fontWeight: '700' }],
        h4:       ['2rem',     { lineHeight: '1.2',  letterSpacing: '-0.01em', fontWeight: '700' }],
        h5:       ['1.75rem',  { lineHeight: '1.3',  letterSpacing: '-0.01em', fontWeight: '600' }],
        h6:       ['1.25rem',  { lineHeight: '1.4',  letterSpacing: '0',       fontWeight: '600' }],
        lead:     ['1.25rem',  { lineHeight: '1.75', letterSpacing: '0.01em',  fontWeight: '300' }],
        body:     ['1rem',     { lineHeight: '1.5',  letterSpacing: '0',       fontWeight: '400' }],
        'body-md':['1.125rem', { lineHeight: '1.5',  letterSpacing: '0',       fontWeight: '500' }],
        small:    ['0.875rem', { lineHeight: '1.5',  letterSpacing: '0.01em',  fontWeight: '500' }],
        button:   ['0.8rem',   { lineHeight: '1.5',  letterSpacing: '0.06em',  fontWeight: '600' }],
        label:    ['0.65rem',  { lineHeight: '1.5',  letterSpacing: '0.25em',  fontWeight: '500' }], // eyebrow, uppercase
        tiny:     ['0.75rem',  { lineHeight: '1.5',  letterSpacing: '0',       fontWeight: '400' }],
      },
    },
  },
  plugins: [
    // Semantic utilities: text-display, text-h1, text-body, etc.
    // Tailwind already generates text-<key> from fontSize keys above, so no plugin needed.
    // Examples of usage:
    //   <h1 class="font-heading text-h1 text-text">…</h1>
    //   <p class="font-body text-body text-text-muted">…</p>
    //   <span class="font-body text-label text-text-muted uppercase">…</span>
    //   <button class="bg-primary text-primary-fg text-button">Start a Conversation</button>
  ],
};
