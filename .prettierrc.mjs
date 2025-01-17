/** @type {import("prettier").Config} */
export default {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  semi: true,
  experimentalTernaries: false,
  singleQuote: false,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "all",
  singleAttributePerLine: false,
  htmlWhitespaceSensitivity: "css",
  proseWrap: "preserve",
  insertPragma: false,
  printWidth: 100,
  requirePragma: false,
  tabWidth: 2,
  useTabs: false,
  embeddedLanguageFormatting: "auto",
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
