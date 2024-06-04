import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["node_modules/", "dist/", "*.js"],
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-undef": "error",
      "no-console": "warn",
      // to enforce using type for object type definitions, can be type or interface
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
