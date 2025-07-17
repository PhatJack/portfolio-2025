// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./remark-reading.time.mjs";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkEmoji from "remark-emoji";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import remarkDirective from "remark-directive";
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeComponents from "rehype-components";
import { parseDirectiveNode } from "./src/plugins/remark-directive-rehype.js";
import { AdmonitionComponent } from "./src/plugins/rehype-component-admonition.mjs";
import { GithubCardComponent } from "./src/plugins/rehype-component-github-card.mjs";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon(), mdx({
		syntaxHighlight: false,
		remarkPlugins: [
			remarkMath,
			remarkGfm,
			remarkBreaks,
			remarkEmoji,
			remarkReadingTime,
			remarkGithubAdmonitionsToDirectives,
			remarkDirective,
			parseDirectiveNode,
		],
		rehypePlugins: [
			rehypeKatex,
			rehypeSlug,
			[rehypePrettyCode, { theme: 'github-dark' }],
			[
				rehypeComponents,
				{
					components: {
						github: GithubCardComponent,
						note: (x, y) => AdmonitionComponent(x, y, "note"),
						tip: (x, y) => AdmonitionComponent(x, y, "tip"),
						important: (x, y) => AdmonitionComponent(x, y, "important"),
						caution: (x, y) => AdmonitionComponent(x, y, "caution"),
						warning: (x, y) => AdmonitionComponent(x, y, "warning"),
					},
				},
			],
			[rehypeAutolinkHeadings, {
				behavior: 'wrap',
				properties: {
					className: ['anchor-link','no-underline'],
					ariaLabel: 'Link to section'
				}
			}],
			[rehypeExternalLinks, {
				target: '_blank',
				rel: ['noopener', 'noreferrer'],
				properties: {
					className: ['external-link']
				}
			}]
		]
	})],
	image: {
		service: passthroughImageService()
	},
	devToolbar: {
		enabled: false,
	},
	markdown: {
		remarkPlugins: [
			remarkGfm,
			remarkBreaks,
			remarkEmoji,
			remarkReadingTime
		],
		rehypePlugins: [
			rehypeSlug,
			[rehypePrettyCode, { theme: 'github-dark' }],
			[rehypeAutolinkHeadings, {
				behavior: 'wrap',
				properties: {
					className: ['anchor-link'],
					ariaLabel: 'Link to section'
				}
			}],
			[rehypeExternalLinks, {
				target: '_blank',
				rel: ['noopener', 'noreferrer'],
				properties: {
					className: ['external-link']
				}
			}]
		]
	},
});
