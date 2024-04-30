// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylex from "@stylexjs/eslint-plugin";

const compat = new FlatCompat();

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends("next/core-web-vitals"),
  {
    plugins: {
      stylex,
    },
    rules: {
      "@stylexjs/valid-styles": "error",
    },
  },
);
