import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
    viteConfig,
    defineConfig({
        test: {
            environment: "jsdom",
            globals: true,
            reporters: 'vitest-sonar-reporter',
            outputFile: './coverage/sonar-report.xml',
        },
    })
);
