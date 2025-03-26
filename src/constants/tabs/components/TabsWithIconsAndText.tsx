import { Chip } from "@/components/ui/Chip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { ChartBar, House, Settings } from "lucide-react";

export function TabsWithIconsAndText() {
  return (
    <Tabs defaultValue="t1" className="mx-auto bg-black">
      <TabsList className="flex border-none bg-neutral-900 rounded-lg p-1 shrink mx-auto">
        <TabsTrigger value="t1" className="flex gap-2 items-center flex-none p-2.5 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:rounded-lg">
          <House size={20} /> Home
        </TabsTrigger>
        <TabsTrigger value="t2" className="flex gap-2 items-center flex-none p-2.5 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:rounded-lg">
          <ChartBar size={20} /> Dashboard
        </TabsTrigger>
        <TabsTrigger value="t3" className="flex gap-2 items-center flex-none p-2.5 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:rounded-lg">
          <Settings size={20} /> Settings <Chip rounded>New</Chip>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="t1" className="text-sm text-center text-neutral-400 font-light rounded-lg mt-2">
        Content for Tab 1
      </TabsContent>

      <TabsContent value="t2" className="text-sm text-center text-neutral-400 font-light rounded-lg mt-2">
        Content for Tab 2
      </TabsContent>

      <TabsContent value="t3" className="text-sm text-center text-neutral-400 font-light rounded-lg mt-2">
        Content for Tab 3
      </TabsContent>
    </Tabs>
  );
}
