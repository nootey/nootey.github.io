import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import prettierConfig from "eslint-config-prettier";

export default defineConfig(
    {
        ignores: ["**/dist/**", "**/node_modules/**"],
    },
    eslint.configs.recommended,
    ...pluginVue.configs["flat/recommended"],
    prettierConfig,
    {
        files: ["**/*.vue", "**/*.js", "**/*.mjs"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                sourceType: "module",
            },
        },
        rules: {
            "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
            "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
            "no-undef": "off",
            "no-unused-vars": "off",
            "vue/multi-word-component-names": "off",
            "vue/no-unused-components": "off",
            "vue/no-mutating-props": "off",

            // Compact formatting
            "vue/max-attributes-per-line": "off",
            "vue/singleline-html-element-content-newline": "off",
            "vue/multiline-html-element-content-newline": "off",
        },
    },
);
