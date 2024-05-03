import { defineConfig } from 'astro/config';
import icon from "astro-icon"

// https://astro.build/config
export default defineConfig({
    integrations: [icon()],
    site: 'https://github.com/UWFormulaN/Website.github.io',
    base: 'src'
});
