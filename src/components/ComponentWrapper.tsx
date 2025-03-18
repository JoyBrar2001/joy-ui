"use client";

import { cn } from "@/utils";
import Button from "@/components/ui/Button";
import { Code } from "lucide-react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/Dialog";
import CodeBlock from "@/app/components/test/CodeBlock";
import { DependeciesStep, SourceStep, UtilitiesStep } from "@/constants/data";

type ComponentWrapperProps = {
  title: string;
  cols?: 4 | 6 | 12;
  steps: Array<DependeciesStep | UtilitiesStep | SourceStep>;
  children: React.ReactNode;
};

export default function ComponentWrapper({ title, cols = 4, steps, children }: ComponentWrapperProps) {
  console.log(steps);

  return (
    <div
      className={cn(
        "relative pl-4 py-10 flex gap-2 flex-col justify-start items-start min-h-48 grid_item_border",
        cols === 4 && "col-span-12 md:col-span-6 lg:col-span-4",
        cols === 6 && "col-span-12 md:col-span-6",
        cols === 12 && "col-span-12"
      )}
    >
      <div className="w-full flex justify-between items-center mb-2">
        <label className="font-medium text-black dark:text-white">
          {title}
        </label>

        <Dialog>
          <DialogTrigger>
            <Button
              className="relative group size-10 rounded-md transition-all duration-300 text-black"
              variant="outline"
            >
              <span className="absolute text-nowrap text-xs -top-2 right-0 -translate-y-[100%] border border-neutral-700 rounded-md px-2 py-1 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-[110%] bg-white dark:bg-black"
              >
                View Code
              </span>
              <Code className="size-4 transition-all duration-300 absolute rotate-0 scale-100" />
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>Follow these steps</DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-4">
              {steps.map((step, index) => {
                if (step.type === "dependencies") {
                  const dependencyStep = step as DependeciesStep;
                  return (
                    <div key={`dependency-${index}`}>
                      <h2>Install the following dependencies:</h2>
                      <CodeBlock
                        tabs={[
                          {
                            name: "npm",
                            code: `npm install ${dependencyStep.libraries.join(" ")}`,
                            language: "shell",
                          },
                          {
                            name: "yarn",
                            code: `yarn add ${dependencyStep.libraries.join(" ")}`,
                            language: "shell",
                          },
                        ]}
                        wrapLines={false}
                        showLineNumbers={false}
                      />
                    </div>
                  );
                }

                if (step.type === "utilities") {
                  const utilityStep = step as UtilitiesStep;
                  return (
                    <div key={`utility-${index}`}>
                      <h2>Add the following files to your code:</h2>
                      {utilityStep.files.map((file, fileIndex) => (
                        <div key={`file-${index}-${fileIndex}`}>
                          <CodeBlock
                            tabs={[
                              {
                                name: file.name,
                                path: file.path,
                                code: file.code,
                                language: file.language,
                              },
                            ]}
                          />
                        </div>
                      ))}
                    </div>
                  );
                }

                if (step.type === "source") {
                  const sourceStep = step as SourceStep;
                  return (
                    <div key={`source-${index}`}>
                      <h2>Copy and paste the following code into your project:</h2>
                      <CodeBlock
                        tabs={[
                          {
                            name: sourceStep.name,
                            path: sourceStep.path,
                            code: sourceStep.code,
                            language: sourceStep.language,
                          },
                        ]}
                        wrapLines
                        showLineNumbers
                      />
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </DialogContent>
        </Dialog>
      </div>
      {children}
    </div>
  );
}
