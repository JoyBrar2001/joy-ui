import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export function VerticalTabsWithBg() {
  return (
    <Tabs defaultValue="t1" className="flex-row mx-auto w-96">
      <TabsList className="flex flex-col bg-neutral-950 p-1 shrink border-none mr-2">
        <TabsTrigger value="t1" className="flex-none rounded-lg data-[state=active]:bg-neutral-800 data-[state=active]:text-white">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="t2" className="flex-none rounded-lg data-[state=active]:bg-neutral-800 data-[state=active]:text-white">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="t3" className="flex-none rounded-lg data-[state=active]:bg-neutral-800 data-[state=active]:text-white">
          Tab 3
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