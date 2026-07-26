import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default ({ mode }) => {
    return defineConfig({
        plugins: [vue(), tailwindcss()],
        build: {
            chunkSizeWarningLimit: 1600,
            rollupOptions: {
                output: {
                    manualChunks: undefined, // Disable manualChunks to allow Vite to manage chunks
                },
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern",
                },
            },
        },
    });
};
