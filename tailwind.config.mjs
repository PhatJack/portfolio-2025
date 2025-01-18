/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('/background.gif')",
      }),
			colors: {
				dark: {
					DEFAULT: "#1A202C",
					100: "#2D3748",
					200: "#2D3748",
					300: "#2D3748",
					400: "#2D3748",
					500: "#2D3748",
					600: "#2D3748",
					700: "#2D3748",
					800: "#2D3748",
					900: "#2D3748",
				}
			}
    },
  },
  plugins: [require("@tailwindcss/typography")],
	corePlugins: {
		preflight: false,
	}
};
