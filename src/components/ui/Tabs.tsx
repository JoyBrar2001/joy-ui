import { cn } from "@/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export function Tabs({ children, className, ...props }: TabsPrimitive.TabsProps) {
  return (
    <TabsPrimitive.Root
      className={cn("flex w-full flex-col rounded-lg bg-white dark:bg-neutral-950", className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  );
}

export function TabsList({ children, className, ...props }: TabsPrimitive.TabsListProps) {
  return (
    <TabsPrimitive.List
      className={cn("flex shrink-0 border-b border-neutral-200 dark:border-neutral-700", className)}
      {...props}
    >
      {children}
    </TabsPrimitive.List>
  );
}

export function TabsTrigger({ children, className, ...props }: TabsPrimitive.TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn("flex flex-1 select-none items-center justify-center px-5 py-3 text-sm leading-none text-neutral-500 outline-none hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100", className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}

export function TabsContent({ children, className, ...props }: TabsPrimitive.TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn("grow bg-white p-5 outline-none dark:bg-neutral-950", className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  );
}
