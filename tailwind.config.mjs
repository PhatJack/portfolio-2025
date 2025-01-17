/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/background.gif')",
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
	corePlugins: {
		preflight: false,
	}
};
