export const codeblockCode = `"use client";

import { useState } from "react";
import { Copy, Check, ChevronDown, ChevronUp } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Chip } from "@/components/ui/Chip";
import { cn } from "@/utils";
import { LanguageType } from "@/constants/data";
import { Button } from "./Button";

type CodeTab = {
  name: string;
  code: string;
  path?: string;
  language?: LanguageType;
  highlightLines?: number[];
};

type CodeBlockProps = {
  tabs?: CodeTab[];
  wrapLines?: boolean;
  showLineNumbers?: boolean;
  maxLines?: number;
  collapsible?: boolean;
};

export function CodeBlock({
  tabs = [],
  wrapLines = true,
  showLineNumbers = true,
  maxLines = 12,
  collapsible = true,
}: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const activeCode = tabs[activeTab] || tabs[0];
  const codeLines = activeCode.code.split("\n").length;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCode.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {activeCode.path && (
        <Chip className="text-xs" variant="secondary">
          {activeCode.path}
        </Chip>
      )}
      <div className="w-full relative bg-neutral-800 dark:bg-neutral-900 border border-neutral-800 text-white rounded-lg overflow-hidden">
        {tabs.length > 1 && (
          <div className="flex px-4 gap-2 border-b border-neutral-800">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={cn(
                  "py-2 px-1.5 text-sm font-medium cursor-pointer",
                  activeTab === index ? "border-b border-b-white text-white" : "text-neutral-300"
                )}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 size-6 bg-neutral-700 dark:bg-neutral-800 hover:bg-neutral-600 dark:hover:bg-neutral-500 border border-neutral-600 text-white rounded"
        >
          <Check
            size={16}
            className={cn(
              "size-3 absolute left-1/2 top-1/2 -translate-1/2 scale-0 opacity-0 transition-all duration-300",
              copied && "scale-100 opacity-100"
            )}
          />
          <Copy
            size={16}
            className={cn(
              "size-3 absolute left-1/2 top-1/2 -translate-1/2 scale-100 opacity-100 transition-all duration-300",
              copied && "scale-0 opacity-0"
            )}
          />
        </button>

        <SyntaxHighlighter
          language={activeCode.language || "javascript"}
          style={atomDark}
          wrapLines={wrapLines}
          showLineNumbers={showLineNumbers}
          lineProps={(lineNumber) =>
            activeCode.highlightLines?.includes(lineNumber)
              ? { style: { backgroundColor: "rgba(255, 255, 0, 0.2)" } }
              : {}
          }
          customStyle={{
            margin: 0,
            padding: collapsible && expanded ? "0.5rem 1rem 3rem" : "0.5rem 1rem",
            background: "transparent",
            fontSize: "0.875rem",
            maxHeight: collapsible && !expanded ? \`\${maxLines * 1.5}rem\` : "none",
            overflowY: "hidden",
            overflowX:"auto"
          }}
        >
          {activeCode.code}
        </SyntaxHighlighter>

        {collapsible && codeLines > maxLines && !expanded && (
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-neutral-900 to-transparent" />
        )}

        {collapsible && codeLines > maxLines && (
          <Button
            onClick={() => setExpanded(!expanded)}
            variant="outline"
            className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-neutral-800/50 backdrop-blur-sm border-2 border-neutral-600"
          >
            {expanded ? "Collapse" : "Show More"}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </Button>
        )}
      </div>
    </>
  );
}`;