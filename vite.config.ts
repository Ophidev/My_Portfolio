import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  server: {
    allowedHosts: [
      "prosupport-dorathy-hintingly.ngrok-free.dev",
    ],
  },

  optimizeDeps: {
    // Prevent Vite prebundle from breaking TanStack Start virtual modules in dev.
    exclude: [
      "@tanstack/start-server-core",
      "@tanstack/start-client-core",
      "@tanstack/react-start",
      "@tanstack/react-start/client",
      "@tanstack/react-start/server",
    ],
  },

  plugins: [
    cloudflare({
      viteEnvironment: { name: "ssr" },
    }),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({
      server: { entry: "server" },
    }),
    react(),
    tailwindcss(),
  ],
});