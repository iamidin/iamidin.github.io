/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/flowbite.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#12ccbf',
        secondary: "#fdb62f",
        accent: "#1fd2e5",
        neutral: "#ffffff",
      },
      fontFamily: {
        primary: ['Inter'],
      },
    },
  },
  daisyui: {
    // base: false,
    // themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    // darkTheme: "dark", // name of one of the included themes for dark mode
    // base: true, // applies background color and foreground color for root element by default
    // styled: true, // include daisyUI colors and design decisions for all components
    // utils: true,
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#0ea5e9",
          secondary: "#3b82f6",
          accent: "#1fd2e5",
          neutral: "#ffffff",
          "base-100": "#f3f4f6",
          info: "#67e8f9",
          success: "#86efac",
          warning: "#fcd34d",
          error: "#f43f5e",
          "body": {
            "color": "#1EA1F1",
          },
          ".btn": {
            "color": "#ffffff",
          },
          ".btn-ghost": {
            "color": "#1f2937",
          },
          "text-primary": "#111827",
          "text-secondary": "#1f2937",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#12ccbf",
          "secondary": "#fdb62f",
          "accent": "#1fd2e5",
          "neutral": "#111827",
          // "base-100": "#f3f4f6",
          "info": "#67e8f9",
          "success": "#86efac",
          "warning": "#fcd34d",
          "error": "#f43f5e",
          "body": {
            "color": "#0000",
          },
        },
      },
    ],

  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries',
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
