import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

    kit: {
        package: {
            exports(filepath) {
                return filepath.endsWith("package.json") || filepath.endsWith("index.ts");
            },
        },

        adapter: adapter({
            pages: "build",
            assets: "build",
            fallback: null,
        }),
        prerender: {
            default: true,
        },
        paths: {
            base: "/svelte-codemirror-editor",
        },

        vite: {
            optimizeDeps: {
                exclude: ["codemirror"],
            },
        },
    },
};

export default config;
