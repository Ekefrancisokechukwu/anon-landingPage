/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      max2: { max: "1018px" },
      mb_l: "550px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://img.freepik.com/free-photo/full-shot-man-drinking-water_23-2149729053.jpg?size=626&ext=jpg&ga=GA1.2.1083463234.1681973259&semt=ais')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        primaryblue: "#002f8c",
      },
    },
  },
  plugins: [],
};
