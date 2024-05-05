// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
// import { FlatCompat } from "@eslint/eslintrc";
// import stylex from "@stylexjs/eslint-plugin";

// const compat = new FlatCompat();

// console.log(tseslint.configs.recommended, { depth: 3 });
const config = tseslint.config(
  {
    name: "global-setting",
    ignores: ["out/", ".next/", ".babelrc.js", "next.config.js"],
  },
  eslint.configs.recommended,
  // ...tseslint.configs.recommended,
  // ...tseslint.configs.stylistic,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
);

console.dir(config, { depth: 4 });

export default config;
