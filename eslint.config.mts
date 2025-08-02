import globals from "globals";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import jsonPlugin from "@eslint/json";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config([
  {
    ignores: [
      "**/*.json",
      "package.json",
      "package-lock.json",
      "tsconfig.json",
    ],
  },
  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.node,
    },
  },

  {
    files: ["**/*.json"],
    ...jsonPlugin.configs.recommended,
  },
  prettierRecommended,
]);
