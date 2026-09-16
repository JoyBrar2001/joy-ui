import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

const prettierBin = "./node_modules/.bin/prettier";
const patterns = [
  "src/**/*.{ts,tsx,js,jsx,json,css,md}",
  "scripts/**/*.{mjs,js}",
  "*.{ts,tsx,js,jsx,mjs,cjs}",
  "*.{json,md,css}",
];
const mode = process.argv.includes("--check") ? "--check" : "--write";

if (!existsSync(prettierBin)) {
  console.error("Prettier is not installed. Run npm install first.");
  process.exit(1);
}

console.log(
  `${mode === "--check" ? "Checking" : "Formatting"} project files with Prettier...`,
);
execFileSync(prettierBin, [mode, ...patterns], { stdio: "inherit" });
