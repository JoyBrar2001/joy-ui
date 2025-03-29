export const simpleTabsCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

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
}`;

export const tabsListWithBgCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export function TabsListWithBg() {
  return (
    <Tabs defaultValue="t1" className="mx-auto w-96">
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
}`;

export const tabsTriggerRoundedCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

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
}`;

export const tabsTriggerWithBgCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export function TabsTriggerWithBg() {
  return (
    <Tabs defaultValue="t1" className="mx-auto w-96">
      <TabsList className="w-full flex border-none">
        <TabsTrigger value="t1" className="data-[state=active]:text-white data-[state=active]:bg-neutral-800 data-[state=active]:rounded-lg">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="t2" className="data-[state=active]:text-white data-[state=active]:bg-neutral-800 data-[state=active]:rounded-lg">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="t3" className="data-[state=active]:text-white data-[state=active]:bg-neutral-800 data-[state=active]:rounded-lg">
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
}`;

export const tabsWithIconsCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { ChartBar, House, Settings } from "lucide-react";

export function TabsWithIcons() {
  return (
    <Tabs defaultValue="t1" className="mx-auto bg-black w-96">
      <TabsList className="flex border-none bg-neutral-900 rounded-lg p-1 shrink mx-auto">
        <TabsTrigger value="t1" className="flex-none p-2.5 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:rounded-lg">
          <House size={20} />
        </TabsTrigger>
        <TabsTrigger value="t2" className="flex-none p-2.5 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:rounded-lg">
          <ChartBar size={20} />
        </TabsTrigger>
        <TabsTrigger value="t3" className="flex-none p-2.5 data-[state=active]:text-white data-[state=active]:bg-black data-[state=active]:rounded-lg">
          <Settings size={20} />
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
}`;

export const tabsWithIconsAndTextCode = `import { Chip } from "@/components/ui/Chip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { ChartBar, House, Settings } from "lucide-react";

export function TabsWithIconsAndText() {
  return (
    <Tabs defaultValue="t1" className="mx-auto bg-black w-96">
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
}`;

export const verticalTabsCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export function VerticalTabs() {
  return (
    <Tabs defaultValue="t1" className="flex-row mx-auto w-96">
      <TabsList className="flex flex-col bg-neutral-950 p-1 shrink border-none mr-2">
        <TabsTrigger value="t1" className="flex-none border-l-2 border-l-transparent data-[state=active]:border-l-white data-[state=active]:text-white">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="t2" className="flex-none border-l-2 border-l-transparent data-[state=active]:border-l-white data-[state=active]:text-white">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="t3" className="flex-none border-l-2 border-l-transparent data-[state=active]:border-l-white data-[state=active]:text-white">
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
}`;

export const verticalTabsWithBgCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

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
}`;

export const verticalTabsWithCommonBgCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

export function VerticalTabsWithCommonBg() {
  return (
    <Tabs defaultValue="t1" className="flex-row mx-auto w-96">
      <TabsList className="flex flex-col rounded-lg bg-neutral-900 p-1 shrink border-none mr-2">
        <TabsTrigger value="t1" className="flex-none rounded-lg data-[state=active]:bg-black data-[state=active]:text-white">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="t2" className="flex-none rounded-lg data-[state=active]:bg-black data-[state=active]:text-white">
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="t3" className="flex-none rounded-lg data-[state=active]:bg-black data-[state=active]:text-white">
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
}`;

export const verticalTabsWithIconsCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { ChartBar, House, Settings } from "lucide-react";

export function VerticalTabsWithIcons() {
  return (
    <Tabs defaultValue="t1" className="flex-row mx-auto w-96">
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
}`;

export const verticalTabsWithIconsAndTextCode = `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { ChartBar, House, Settings } from "lucide-react";

export function VerticalTabsWithIconsAndText() {
  return (
    <Tabs defaultValue="t1" className="flex-row mx-auto w-96">
      <TabsList className="flex flex-col bg-neutral-950 p-1 shrink border-none mr-2">
        <TabsTrigger value="t1" className="px-2.5 flex gap-2 flex-none border-l-2 border-l-transparent data-[state=active]:border-l-white data-[state=active]:text-white">
          <House size={20} />
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="t2" className="px-2.5 flex gap-2 flex-none border-l-2 border-l-transparent data-[state=active]:border-l-white data-[state=active]:text-white">
          <ChartBar size={20} />
          Tab 2
        </TabsTrigger>
        <TabsTrigger value="t3" className="px-2.5 flex gap-2 flex-none border-l-2 border-l-transparent data-[state=active]:border-l-white data-[state=active]:text-white">
          <Settings size={20} />
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
}`;