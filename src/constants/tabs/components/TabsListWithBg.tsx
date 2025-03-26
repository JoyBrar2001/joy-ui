import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export function TabsListWithBg() {
  return (
    <Tabs defaultValue="t1" className="mx-auto">
      <TabsList className="w-full flex border-none bg-neutral-900 rounded-lg p-1">
        <TabsTrigger value="t1" className="data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:rounded-lg">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="t2" className="data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:rounded-lg">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="t3" className="data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:rounded-lg">
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
