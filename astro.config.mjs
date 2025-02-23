// @ts-check
import {defineConfig} from 'astro/config';
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
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
        icon(),
        mdx(),
        react()
    ],
});
