import { Alert } from "@/components/ui/Alert";
import { ComponentCategory } from "../data";
import { alertCode } from "./code";
import { cnFile } from "../common";
import { Info } from "./components/Info";
import { InfoColored } from "./components/InfoColored";
import { AlertColored, AlertComponent, AlertWithButtonAndLink, InfoWithButton, Success, SuccessColored, SuccessWithButton, Warning, WarningColored, WarningWithButtonAndLink } from "./components";

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
      component: Info
    },
    {
      title: "Info (Colored)",
      component: InfoColored
    },
    {
      title: "Success",
      component: Success
    },
    {
      title: "Success (Colored)",
      component: SuccessColored
    },
    {
      title: "Warning",
      component: Warning
    },
    {
      title: "Warning (Colored)",
      component: WarningColored
    },
    {
      title: "Alert",
      component: AlertComponent
    },
    {
      title: "Alert (Colored)",
      component: AlertColored
    },
    {
      title: "Info with Button",
      component: InfoWithButton
    },
    {
      title: "Success with Button",
      component: SuccessWithButton
    },
    {
      title: "Warning with Button & Link",
      component: WarningWithButtonAndLink
    },
    {
      title: "Alert with Button & Link",
      component: AlertWithButtonAndLink
    }
  ],
};