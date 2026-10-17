/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    screens: { xs: "420px", sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    extend: {
      colors: {
        night: "#0d0808",
        crimson: "#b3152a",
        crimsonDark: "#951122",
        coral: "#e5483e",
        gold: "#f5b53f",
        blush: "#f9e7e3",
        petal: "#fdf5f1",
        tag: "#fdf0e8",
        rust: "#b4532f",
        ink: "#231819",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(16px)" }, "100%": { opacity: 1, transform: "none" } },
        pop: { "0%": { opacity: 0, transform: "scale(.94)" }, "100%": { opacity: 1, transform: "none" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        bob: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(6px)" } },
        ring: { "0%": { boxShadow: "0 0 0 0 rgba(229,72,62,.55)" }, "100%": { boxShadow: "0 0 0 14px rgba(229,72,62,0)" } },
      },
      animation: {
        fadeUp: "fadeUp .7s ease-out both",
        pop: "pop .25s ease-out both",
        marquee: "marquee 28s linear infinite",
        bob: "bob 1.8s ease-in-out infinite",
        ring: "ring 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
