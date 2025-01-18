// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./remark-reading.time.mjs";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind({

	}), icon(), mdx()],
	devToolbar: {
		enabled: false,
	},
	markdown: {
		remarkPlugins:
			[remarkReadingTime],
	}
});
