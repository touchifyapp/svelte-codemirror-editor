module.exports = {
    root: true,
    ignorePatterns: ["*.cjs"],
    extends: ["eslint:recommended", "plugin:svelte/recommended", "plugin:@typescript-eslint/recommended", "prettier"],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
        extraFileExtensions: [".svelte"],
    },
    overrides: [
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
            },
        },
    ],
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
};
