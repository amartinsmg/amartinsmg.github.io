import { defineConfig } from "vite";
import fs from "node:fs";
import path from "node:path";

function htmlComponents() {
    return {
        name: "html-components",
        transformIndexHtml(html) {
            return html.replace(
                /<([A-Z][A-Za-z0-9]*)\s*><\/\1>/g,
                (_, name) => {
                    const file = path.resolve(
                        `src/components/${name}.html`
                    );
                    return fs.readFileSync(file, "utf8");
                }
            );
        }
    };
}

export default defineConfig({
    base: "./",
    plugins: [htmlComponents()]
});