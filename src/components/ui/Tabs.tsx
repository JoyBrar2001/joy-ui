import { cn } from "@/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export function Tabs({ children, className, ...props }: TabsPrimitive.TabsProps) {
  return (
    <TabsPrimitive.Root
      className={cn("flex w-96 flex-col bg-neutral-950 rounded-lg", className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  );
}

export function TabsList({ children, className, ...props }: TabsPrimitive.TabsListProps) {
  return (
    <TabsPrimitive.List
      className={cn("flex shrink-0 border-b border-neutral-700", className)}
      {...props}
    >
      {children}
    </TabsPrimitive.List>
  );
}

export function TabsTrigger({ children, className, ...props }: TabsPrimitive.TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger
      className={cn("flex flex-1 select-none items-center justify-center px-5 py-3 text-sm leading-none text-neutral-400 outline-none hover:text-neutral-100", className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}

export function TabsContent({ children, className, ...props }: TabsPrimitive.TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn("grow rounded-b-md bg-neutral-950 p-5 outline-none", className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  );
}