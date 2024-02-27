/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['"Lato"', '-apple-system', 'sans-serif'],
    },
    colors: {
      // Make sure these guidelines are followed when adding new colors: https://tailwindcss.com/docs/customizing-colors#using-css-variables
      // Color variables should be added to tailwind.css.
      brand: {
        400: 'rgb(var(--brand-400) / <alpha-value>)',
        300: 'rgb(var(--brand-300) / <alpha-value>)',
        200: 'rgb(var(--brand-200) / <alpha-value>)',
        100: 'rgb(var(--brand-100) / <alpha-value>)',
      },
      grey: {
        0: 'rgb(var(--grey-0) / <alpha-value>)',
        100: 'rgb(var(--grey-100) / <alpha-value>)',
        200: 'rgb(var(--grey-200) / <alpha-value>)',
        300: 'rgb(var(--grey-300) / <alpha-value>)',
        400: 'rgb(var(--grey-400) / <alpha-value>)',
        500: 'rgb(var(--grey-500) / <alpha-value>)',
        600: 'rgb(var(--grey-600) / <alpha-value>)',
        700: 'rgb(var(--grey-700) / <alpha-value>)',
      },
      warning: {
        400: 'rgb(var(--warning-400) / <alpha-value>)',
        300: 'rgb(var(--warning-300) / <alpha-value>)',
        200: 'rgb(var(--warning-200) / <alpha-value>)',
        100: 'rgb(var(--warning-100) / <alpha-value>)',
      },
      error: {
        400: 'rgb(var(--error-400) / <alpha-value>)',
        300: 'rgb(var(--error-300) / <alpha-value>)',
        200: 'rgb(var(--error-200) / <alpha-value>)',
        100: 'rgb(var(--error-100) / <alpha-value>)',
      },
      blue: {
        400: 'rgb(var(--blue-400) / <alpha-value>)',
        300: 'rgb(var(--blue-300) / <alpha-value>)',
        200: 'rgb(var(--blue-200) / <alpha-value>)',
        100: 'rgb(var(--blue-100) / <alpha-value>)',
      },
      purple: {
        400: 'rgb(var(--purple-400) / <alpha-value>)',
        300: 'rgb(var(--purple-300) / <alpha-value>)',
        200: 'rgb(var(--purple-200) / <alpha-value>)',
        100: 'rgb(var(--purple-100) / <alpha-value>)',
      }
    },
    spacing: {
      // This spacing scale is based on the actual pixel values converted to REM values.
      // This diverges from tailwind's standard pattern of defining its own spacing numbers
      // but should be easier for developers trying to match spacing to designs in Figma.
      0: '0',
      1: '0.0625rem', // 1px
      3: '0.1875rem', // 3px
      5: '0.3125rem', // 5px
      10: '0.625rem', // 10px
      15: '0.9375rem', // 15px
      20: '1.25rem', // 20px
      25: '1.5625rem', // 25px
      30: '1.875rem', // 30px
      35: '2.1875rem', // 35px
      40: '2.5rem', // 40px
      45: '2.8125rem', // 45px
      50: '3.125rem', // 50px
      60: '3.75rem', // 60px
    },
  },
  plugins: [],
  darkMode: 'class',
};
