import globals from "globals";
import pluginJs from "@eslint/js";
import * as tseslint from "typescript-eslint";

export default [
  // This configuration will apply to all files
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
    }
  },
  // This configuration will apply only to TypeScript files
  {
    files: ["**/*.{ts,mts,cts}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json"
      }
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...tseslint.configs.recommendedTypeChecked.rules,
    }
  }
];