import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export function SimpleTabs() {
  return (
    <Tabs defaultValue="t1" className="mx-auto w-96">
      <TabsList className="w-full flex">
        <TabsTrigger value="t1" className="border-b-2 border-b-transparent data-[state=active]:border-b-white data-[state=active]:text-white">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="t2" className="border-b-2 border-b-transparent data-[state=active]:border-b-white data-[state=active]:text-white">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="t3" className="border-b-2 border-b-transparent data-[state=active]:border-b-white data-[state=active]:text-white">
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