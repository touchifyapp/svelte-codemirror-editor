import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

    kit: {
        package: {
            exports(filepath) {
                return filepath.endsWith("package.json") || filepath.endsWith("index.ts");
            },
        },
        vite: {
            optimizeDeps: {
                exclude: ["codemirror"],
            },
        },
    },
};

export default config;
