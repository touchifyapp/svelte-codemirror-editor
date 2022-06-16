import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
        package: {
            exports(filepath) {
                return filepath.endsWith("package.json") || filepath.endsWith("index.ts");
            },
        },
	}
};

export default config;
