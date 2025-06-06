import { ComponentProps } from "react";
import { ChevronDown } from "lucide-react";

import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/utils";

export function Accordion({ className, children, ...props }: AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) {
  return (
    <AccordionPrimitive.Root className={cn("w-full", className)} {...props} >
      {children}
    </AccordionPrimitive.Root>
  );
}

type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>;

export function AccordionItem({ children, className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-neutral-700 last:border-none", className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}

type AccordionTriggerProps = ComponentProps<typeof AccordionPrimitive.Trigger>;

export function AccordionTrigger({ children, left = false, className, ...props }: AccordionTriggerProps & { left?: boolean }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group text-white flex gap-2 h-12 flex-1 cursor-default items-center justify-between px-5 text-[15px] leading-none outline-none",
          left && "flex-row-reverse justify-end",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown
          size={20}
          className="ml-2 transition-all duration-300 group-data-[state=open]:rotate-180"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

type AccordionContentProps = ComponentProps<typeof AccordionPrimitive.Content>;

export function AccordionContent({ children, className, ...props }: AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn(
        "overflow-hidden bg-neutral-950 text-neutral-400 pl-2 text-sm data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
        className
      )}
      {...props}
    >
      <div className="px-4 py-2">
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}
