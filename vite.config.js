import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default ({ mode }) => {
    return defineConfig({
        plugins: [vue()],
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
