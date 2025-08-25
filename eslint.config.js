import js from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import pluginN from "eslint-plugin-n";
import pluginPromise from "eslint-plugin-promise";
import pluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginPlaywright from "eslint-plugin-playwright";

export default [
  {
    ignores: ["eslint.config.js", "node_modules/**", "dist/**", "build/**", "coverage/**"],
  },
  js.configs.recommended,
  pluginImport.flatConfigs.recommended,
  pluginN.configs["flat/recommended"],
  pluginPromise.configs["flat/recommended"],
  eslintConfigPrettier,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".ts", ".js", ".mjs", ".cjs"],
        },
      },
    },
    rules: {
      "no-console": "off",
      "prettier/prettier": ["error"],
    },
    plugins: {
      prettier: pluginPrettier,
    },
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "import/no-unresolved": "off",
      "n/no-missing-import": "off",
    },
  },
  {
    files: ["tests/**/*.{ts,js}"],
    plugins: { playwright: pluginPlaywright },
    rules: {
      ...pluginPlaywright.configs.recommended.rules,
    },
  },
  {
    files: [
      "playwright.config.ts",
      "tests/**/*.{ts,js}",
      "src/pages/**/*.ts",
      "src/fixtures/**/*.ts",
    ],
    rules: {
      "n/no-extraneous-import": "off",
    },
  },
];
