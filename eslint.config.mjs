import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  // Styles and static artwork are not linted, so the palette rule below can
  // never trip over a .css or .svg file. globals.css is where the palette is
  // defined; public/** holds image assets.
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "next-env.d.ts",
    "out/**",
    "build/**",
    "src/**/*.css",
    "public/**",
  ]),
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Strict colour palette (design.md §3.1): components may only paint with
      // the tokens in src/app/globals.css. A raw hex or colour function in
      // src/** is a build failure, so a brand colour can never drift or be
      // eyeballed into place. The only escape is an inline disable comment
      // carrying a reason, which shows up in review.
      "no-restricted-syntax": [
        "error",
        {
          // A whole string that is a hex value: fill="#1b4d3e", themeColor.
          selector: "Literal[value=/^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/]",
          message:
            "Raw hex colour. Use a design token instead (text-brand, bg-paper, border-line) — the palette is in src/app/globals.css. If this is a Next.js metadata field that must be a literal, add an eslint-disable-next-line no-restricted-syntax comment with a reason.",
        },
        {
          // Hex smuggled through a Tailwind arbitrary value: text-[#ff5a1f].
          selector:
            "Literal[value=/\\[[^\\]]*#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})[^\\]]*\\]/]",
          message:
            "Raw hex colour in a Tailwind class. Drop the arbitrary value and use the token (text-brand, bg-paper, border-line) — the palette is in src/app/globals.css.",
        },
        {
          // Colour written as a string: "rgb(27 77 62 / 0.4)", bg-[hsl(...)].
          selector: "Literal[value=/\\b(?:rgba?|hsla?|oklch|oklab|hwb)\\s*\\(/]",
          message:
            "Raw colour function. Use a design token instead (text-brand, bg-paper, border-line) — the palette is in src/app/globals.css.",
        },
        {
          // Colour function called in JS.
          selector: "CallExpression[callee.name=/^(rgb|rgba|hsl|hsla|oklch|oklab|hwb)$/]",
          message:
            "Raw colour function. Use a design token instead (text-brand, bg-paper, border-line) — the palette is in src/app/globals.css.",
        },
      ],
    },
  },
]);

export default eslintConfig;
