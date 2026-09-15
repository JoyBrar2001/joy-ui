import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { progressCode } from "./code/progressCode";
import { progress25Code, progress65Code, progressCompleteCode, progressCustomHeightCode } from "./code/componentCodes";
import { ProgressAt25, ProgressAt65, ProgressComplete, ProgressCustomHeight } from "./components";

export const progressData: ComponentCategory = {
  cols: 4,
  title: "Progress",
  subtitle: "Show completion status with an accessible progress indicator",
  steps: [{ type: "dependencies", libraries: ["clsx", "tailwind-merge", "@radix-ui/react-progress"] }, { type: "utilities", files: [{ name: "cn.ts", path: "@/utils/cn.ts", language: "typescript", code: cnFile }] }, { type: "source", name: "Progress.tsx", path: "@/components/ui/Progress.tsx", language: "tsx", code: progressCode }],
  components: [
    { title: "Progress at 25%", component: ProgressAt25, code: progress25Code },
    { title: "Progress at 65%", component: ProgressAt65, code: progress65Code },
    { title: "Progress Complete", component: ProgressComplete, code: progressCompleteCode },
    { title: "Progress with Custom Height", component: ProgressCustomHeight, code: progressCustomHeightCode },
  ],
};
