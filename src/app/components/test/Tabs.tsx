import { cn } from "@/utils";
import * as TabsPrimitive from "@radix-ui/react-tabs";

export function Tabs({ children, className, ...props }: TabsPrimitive.TabsProps) {
  return (
    <TabsPrimitive.Root
      className={cn("flex w-[300px] flex-col bg-neutral-900 rounded-lg", className)}
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
      className={cn("flex h-[45px] flex-1 select-none items-center justify-center px-5 text-[15px] leading-none text-neutral-400 outline-none first:rounded-tl-md last:rounded-tr-md hover:text-neutral-100 data-[state=active]:text-white border-b-2 border-transparent data-[state=active]:border-neutral-500", className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}

export function TabsContent({ children, className, ...props }: TabsPrimitive.TabsContentProps) {
  return (
    <TabsPrimitive.Content
      className={cn("grow rounded-b-md bg-neutral-800 p-5 outline-none focus:shadow-[0_0_0_2px] focus:shadow-neutral-700", className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Content>
  );
}