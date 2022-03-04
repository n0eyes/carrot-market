const { NodeNextRequest } = require("next/dist/server/base-http");
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents, addBase }) {
      addComponents({
        ".input": {
          borderColor: "rgb(209,213,219)",
          borderRadius: "0.375Rem",
          borderWidth: "1px",
          padding: "0.75rem 1.5rem 0.75rem 1.5rem",
          "&:focus": {
            boxShadow: "0 0 0",
            borderColor: "rgb(249,115,22)",
          },
          /*
        w-full
        rounded-md
        border
        px-6
        py-3
        */
        },
        ".button": {
          borderRadius: "0.375Rem",
          backgroundColor: "rgb(249,115,22)",
          color: "white",
          padding: "1rem 0",
          "&:hover": {
            "--tw-ring-offset-width": "2px",
            "--tw-ring-color": "rgb(249,115,22)",
          },
          "&:focus": {
            backgroundColor: "rgb(234,88,12)",
          },
        },
      }),
        addBase({
          button: {
            "&:focus": {
              outline: "none",
            },
          },
          input: { outline: "none" },
        });
    }),
  ],
};
