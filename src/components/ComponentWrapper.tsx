"use client";

import { cn } from "@/utils";
import { Button } from "@/components/ui/Button";
import { Code } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

import { DependeciesStep, SourceStep, UtilitiesStep } from "@/constants/data";

import { CodeBlock } from "@/components/ui/CodeBlock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

type ComponentWrapperProps = {
  title: string;
  cols?: 4 | 6 | 12;
  steps: Array<DependeciesStep | UtilitiesStep | SourceStep>;
  code: string;
  children: React.ReactNode;
};

export default function ComponentWrapper({ title, cols = 4, steps, code, children }: ComponentWrapperProps) {
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
            <Tooltip>
              <TooltipTrigger>
                <Button
                  className="relative group size-10 rounded-md transition-all duration-300 text-black"
                  variant="outline"
                >
                  <Code className="size-4 transition-all duration-300 absolute rotate-0 scale-100" />
                </Button>
              </TooltipTrigger>

              <TooltipContent size="xs">
                View Code
              </TooltipContent>
            </Tooltip>
          </DialogTrigger>

          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>

            <Tabs defaultValue="installation" className="w-full">
              <TabsList className="w-fit flex gap-2 border-none bg-neutral-800 rounded-lg p-1">
                <TabsTrigger value="installation" className=" transition-all duration-300 rounded-lg data-[state=active]:rounded-lg data-[state=active]:text-white data-[state=active]:bg-black">
                  Installation
                </TabsTrigger>
                <TabsTrigger value="code" className=" transition-all duration-300 rounded-lg data-[state=active]:rounded-lg data-[state=active]:text-white data-[state=active]:bg-black">
                  Code
                </TabsTrigger>
              </TabsList>

              <TabsContent value="installation" className="w-full">
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
              </TabsContent>

              <TabsContent value="code">
                <CodeBlock
                  tabs={[
                    {
                      name: title,
                      path: `@/components/ui/${title.split(" ").join("")}.tsx`,
                      code: code,
                      language: "tsx",
                    },
                  ]}
                  wrapLines={false}
                  showLineNumbers={true}
                  collapsible={false}
                />
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
      {children}
    </div >
  );
}
