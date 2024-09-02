/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "resume-texture": "url('/src/assets/Resume/resumeTexture.jpg')",
        "nav-profile-texture": "url('/src/assets/nav-profile-texture.png')",
      },
      fontFamily: {
        rowdies: ['"Rowdies"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],

        // Add more custom font families as needed
      },
      colors: {
        primary: "#FFFFFF",
        secondary: "#FFC700",
        accent: "#191919",
      },
    },
  },
  plugins: [],
};
