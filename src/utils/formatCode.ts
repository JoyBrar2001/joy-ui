import * as prettier from "prettier/standalone";
import babelPlugin from "prettier/plugins/babel";
import estreePlugin from "prettier/plugins/estree";
import typescriptPlugin from "prettier/plugins/typescript";

const supportedParsers = new Set(["typescript", "tsx", "javascript", "jsx"]);

export function canFormatCode(language?: string) {
  return supportedParsers.has(language ?? "");
}

export async function formatCode(code: string, language?: string) {
  if (!canFormatCode(language)) return code;
  return prettier.format(code, {
    parser:
      language === "typescript" || language === "tsx" ? "typescript" : "babel",
    plugins: [babelPlugin, estreePlugin, typescriptPlugin],
    printWidth: 90,
    semi: true,
    singleQuote: false,
    trailingComma: "all",
  });
}
