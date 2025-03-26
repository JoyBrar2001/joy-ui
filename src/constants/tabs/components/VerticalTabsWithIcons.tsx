import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { ChartBar, House, Settings } from "lucide-react";

export function VerticalTabsWithIcons() {
  return (
    <Tabs defaultValue="t1" className="flex-row mx-auto">
      <TabsList className="flex flex-col rounded-lg bg-neutral-900 p-1 shrink border-none mr-2">
        <TabsTrigger value="t1" className="flex-none p-2.5 rounded-lg data-[state=active]:bg-black data-[state=active]:text-white">
          <House size={20} />
        </TabsTrigger>
        <TabsTrigger value="t2" className="flex-none p-2.5 rounded-lg data-[state=active]:bg-black data-[state=active]:text-white">
          <ChartBar size={20} />
        </TabsTrigger>
        <TabsTrigger value="t3" className="flex-none p-2.5 rounded-lg data-[state=active]:bg-black data-[state=active]:text-white relative">
          <Settings size={20} />
          <div className="flex justify-center items-center absolute -top-1 -right-1 size-4 rounded-full bg-neutral-700 text-[10px]">4</div>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="t1" className="flex justify-center items-center text-sm text-center text-neutral-400 font-light border border-neutral-800 rounded-lg">
        Content for Tab 1
      </TabsContent>

      <TabsContent value="t2" className="flex justify-center items-center text-sm text-center text-neutral-400 font-light border border-neutral-800 rounded-lg">
        Content for Tab 2
      </TabsContent>

      <TabsContent value="t3" className="flex justify-center items-center text-sm text-center text-neutral-400 font-light border border-neutral-800 rounded-lg">
        Content for Tab 3
      </TabsContent>
    </Tabs>
  );
}