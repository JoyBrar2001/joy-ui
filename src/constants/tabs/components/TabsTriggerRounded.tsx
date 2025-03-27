import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export function TabsTriggerRounded() {
  return (
    <Tabs defaultValue="t1" className="mx-auto w-96">
      <TabsList className="w-full flex border-none bg-neutral-950 rounded-lg p-1">
        <TabsTrigger value="t1" className="data-[state=active]:rounded-full data-[state=active]:text-neutral-950 data-[state=active]:bg-white">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="t2" className="data-[state=active]:rounded-full data-[state=active]:text-neutral-950 data-[state=active]:bg-white">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="t3" className="data-[state=active]:rounded-full data-[state=active]:text-neutral-950 data-[state=active]:bg-white">
          Tab 3
        </TabsTrigger>
      </TabsList>

      <TabsContent value="t1" className="text-sm text-center text-neutral-400 font-light">
        Content for Tab 1
      </TabsContent>

      <TabsContent value="t2" className="text-sm text-center text-neutral-400 font-light">
        Content for Tab 2
      </TabsContent>

      <TabsContent value="t3" className="text-sm text-center text-neutral-400 font-light">
        Content for Tab 3
      </TabsContent>
    </Tabs>
  );
}
