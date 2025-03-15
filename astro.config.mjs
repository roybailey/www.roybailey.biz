// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

const ORIGIN_URL = process.env.VITE_ORIGIN || 'https://www.odinium.com';

// https://astro.build/config
export default defineConfig({
    site: ORIGIN_URL,
    trailingSlash: 'ignore',
    vite: {
        plugins: [
            tailwindcss(),
            sitemap()
        ],
    },
    integrations: [
        react(),
        icon({
            include: {
                // Include only three `lucide` icons in the bundle
                lucide: ['fa-linkedin-square','fa-github-square','fa-twitter-square'],
                // Include all `uis` icons
                // uis: ['*']
            }
        }),
        mdx(),
    ],
});
