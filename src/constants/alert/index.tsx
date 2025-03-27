import { ComponentCategory } from "../data";
import { alertCode } from "./code";
import { cnFile } from "../common";
import { 
  AlertComponent, 
  AlertColored, 
  AlertWithButtonAndLink, 
  Info, 
  InfoColored, 
  InfoWithButton, 
  Success, 
  SuccessColored, 
  SuccessWithButton, 
  Warning, 
  WarningColored, 
  WarningWithButtonAndLink 
} from "./components";
import { 
  infoCode, 
  infoColoredCode, 
  successCode, 
  successColoredCode, 
  successWithButtonCode, 
  warningCode, 
  warningColoredCode, 
  warningWithButtonAndLinkCode, 
  alertComponentCode, 
  alertColoredCode, 
  alertWithButtonAndLinkCode, 
  infoWithButtonCode 
} from "./code/componentCodes";

export const alertData: ComponentCategory = {
  cols: 6,
  title: "Alerts",
  subtitle: "A collection of Alerts for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "lucide-react"
      ]
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: cnFile
        }
      ]
    },
    {
      type: "source",
      name: "Alert.tsx",
      path: "@/components/ui/Alert.tsx",
      language: "tsx",
      code: alertCode
    }
  ],
  components: [
    {
      title: "Info",
      component: Info,
      code: infoCode
    },
    {
      title: "Info (Colored)",
      component: InfoColored,
      code: infoColoredCode
    },
    {
      title: "Success",
      component: Success,
      code: successCode
    },
    {
      title: "Success (Colored)",
      component: SuccessColored,
      code: successColoredCode
    },
    {
      title: "Warning",
      component: Warning,
      code: warningCode
    },
    {
      title: "Warning (Colored)",
      component: WarningColored,
      code: warningColoredCode
    },
    {
      title: "Alert",
      component: AlertComponent,
      code: alertComponentCode
    },
    {
      title: "Alert (Colored)",
      component: AlertColored,
      code: alertColoredCode
    },
    {
      title: "Info with Button",
      component: InfoWithButton,
      code: infoWithButtonCode
    },
    {
      title: "Success with Button",
      component: SuccessWithButton,
      code: successWithButtonCode
    },
    {
      title: "Warning with Button & Link",
      component: WarningWithButtonAndLink,
      code: warningWithButtonAndLinkCode
    },
    {
      title: "Alert with Button & Link",
      component: AlertWithButtonAndLink,
      code: alertWithButtonAndLinkCode
    }
  ],
};
