import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    ...(process.env.NODE_ENV === 'production' ? [
      purgecss.default({
        content: [
          './src/**/*.{js,jsx,ts,tsx}',
          './index.html',
        ],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: {
          standard: [
            // Material-UI classes
            /^Mui/,
            /^css-/,
            // Animation classes
            /^animate/,
            // Iconify classes
            /^iconify/,
            // Keep important utility classes
            'dark',
            'light',
            'sr-only',
          ],
          deep: [
            // Keep all classes that start with these prefixes
            /^Mui/,
            /^css-/,
          ]
        },
        fontFace: true,
        keyframes: true,
        variables: true,
      })
    ] : [])
  ]
}