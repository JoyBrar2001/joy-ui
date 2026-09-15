import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { toastCode } from "./code/toastCode";
import { simpleToastCode, toastWithActionCode, toastWithLongMessageCode } from "./code/componentCodes";
import { SimpleToast, ToastBottomCenter, ToastTopCenter, ToastTopLeft, ToastWithAction, ToastWithLongMessage } from "./components";

export const toastData: ComponentCategory = {
  cols: 4,
  title: "Toast Notifications",
  subtitle: "Provide brief, non-blocking feedback with accessible notifications",
  steps: [{ type: "dependencies", libraries: ["clsx", "tailwind-merge", "@radix-ui/react-toast", "lucide-react"] }, { type: "utilities", files: [{ name: "cn.ts", path: "@/utils/cn.ts", language: "typescript", code: cnFile }] }, { type: "source", name: "Toast.tsx", path: "@/components/ui/Toast.tsx", language: "tsx", code: toastCode }],
  components: [
    { title: "Simple Toast", component: SimpleToast, code: simpleToastCode },
    { title: "Toast with Action", component: ToastWithAction, code: toastWithActionCode },
    { title: "Toast with Long Message", component: ToastWithLongMessage, code: toastWithLongMessageCode },
    { title: "Toast Top Left", component: ToastTopLeft, code: simpleToastCode },
    { title: "Toast Top Center", component: ToastTopCenter, code: simpleToastCode },
    { title: "Toast Bottom Center", component: ToastBottomCenter, code: simpleToastCode },
  ],
};
