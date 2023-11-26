import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: preprocess(),

    package: {
        exports(filepath) {
            return filepath.endsWith("package.json") || filepath.endsWith("index.ts");
        },
    },

    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: undefined,
        }),

        paths: {
            base: "/svelte-codemirror-editor",
        },
    },
};

export default config;
