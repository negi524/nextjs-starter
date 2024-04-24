// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylex from "@stylexjs/eslint-plugin";

// TODO: extends
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      stylex,
    },
    rules: {
      "@stylexjs/valid-styles": "error",
    },
  },
);
