"use client";

import { Children, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog"; // Adjust path as needed
import CodeBlock from "./CodeBlock";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
import { Chip } from "@/components/ui/Chip";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "@/utils"; // Utility function for class merging
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./Accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./Card";
import { Avatar, AvatarImage, AvatarFallback, AvatarIcon } from "@/components/ui/Avatar";
import { ToastProvider, useToast } from "./ToastProvider";


export default function Test() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    // Close the dialog after submission
    setOpen(false);
  };

  const tabs = [
    { name: "DummyComponent.html", code: "<h1>Hello, World!</h1>", language: "html" },
    {
      name: "DummyComponent.css",
      code: `h1 { 
  color: red; 
}`,
      language: "css",
      highlightLines: [2],
    },
  ];

  const shell = [
    { name: "npm", code: "npm install lucide-react", language: "shell" },
    { name: "yarn", code: "yarn add lucide-react", language: "shell" },
  ];

  return (
    <div className="max-w-[100rem] mx-auto h-full flex pt-24 bg-white dark:bg-black">
      <section className="flex-1 p-6 min-h-screen h-full">
        <h1 className="text-xl font-bold text-black dark:text-white mb-4">Hello There</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Open Form
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Fill Out the Form</DialogTitle>
              <DialogDescription>Enter your details and submit</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />

              <DialogFooter>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">
                  Submit
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-md"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Code Block Example</h1>
          <CodeBlock tabs={tabs} />
          <CodeBlock tabs={shell} showLineNumbers={false} />
        </div>

        <Chip variant="primary">
          Chip
        </Chip>
        <Chip variant="secondary">
          Chip
        </Chip>
        <Chip variant="outline">
          Chip
        </Chip>
        <Chip variant="ghost">
          Chip
        </Chip>
        <Chip variant="destructive">
          Chip
        </Chip>
        <Chip variant="custom" rounded className="bg-blue-500 text-white select-none">
          Chip
        </Chip>

        <div className="mt-4"></div>

        <Tooltip>
          <TooltipTrigger>
            <Button>
              Hello There
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top" size="sm" variant="custom" className="bg-gradient-to-br from-blue-500 to-sky-500">
            This is hello there
          </TooltipContent>
        </Tooltip>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Section 1</AccordionTrigger>
            <AccordionContent>
              This is the content of Section 1. It expands when you click the trigger.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Section 2</AccordionTrigger>
            <AccordionContent>
              This is the content of Section 2. It expands when you click the trigger.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card className="w-96">
          <CardHeader>
            <CardTitle>Premium UI Components</CardTitle>
            <CardDescription>Reusable, customizable, and modern components</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our UI component library helps developers build beautiful and accessible interfaces faster.
              Each component is optimized for dark mode, responsive design, and high performance.
            </p>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="primary">
              Get Started
            </Button>
          </CardFooter>
        </Card>

        <Avatar rounded>
          <AvatarIcon position="top-right">
            <div className="size-2 rounded-full bg-green-500 outline-2 outline-neutral-950" />
          </AvatarIcon>

          <AvatarImage src="https://avatars.githubusercontent.com/u/67324809?v=4" />

          <AvatarFallback>
            JB
          </AvatarFallback>
        </Avatar>


        <ToastProvider>
          <ToastComp />
        </ToastProvider>
      </section>
    </div>
  );
}


function ToastComp() {
  const { addToast } = useToast();

  return (
    <div className="p-10">
      <button
        onClick={() => addToast("Success!", "Your action was successful", "success")}
        className="px-4 py-2 bg-green-600 text-white rounded-md"
      >
        Show Success Toast
      </button>

      <button
        onClick={() => addToast("Error!", "Something went wrong", "error")}
        className="px-4 py-2 bg-red-600 text-white rounded-md ml-4"
      >
        Show Error Toast
      </button>
    </div>
  )
}