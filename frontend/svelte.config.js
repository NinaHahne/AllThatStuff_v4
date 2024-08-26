import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        // Use the static adapter
        adapter: adapter({
            pages: 'build',  // Output directory for static pages
            assets: 'build', // Output directory for static assets
            fallback: '200.html' // Fallback HTML file for SPA mode
        })
    }
};

export default config;

