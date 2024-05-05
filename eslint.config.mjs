// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
// import { FlatCompat } from "@eslint/eslintrc";
// import stylex from "@stylexjs/eslint-plugin";

// const compat = new FlatCompat();

// console.dir(tseslint.configs.stylisticTypeChecked, { depth: 3 });
const config = tseslint.config(
  {
    name: "global-setting",
    ignores: ["out/", ".next/", ".babelrc.js", "next.config.js"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        // https://typescript-eslint.io/getting-started/typed-linting
        project: true,
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-definitions": "off",
    },
  },
);

console.dir(config, { depth: 4 });

export default config;
