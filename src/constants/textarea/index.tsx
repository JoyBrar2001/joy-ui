import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { textareaCode } from "./code/textareaCode";
import {
  disabledTextareaCode,
  errorTextareaCode,
  simpleTextareaCode,
  textareaWithCharacterCountCode,
  textareaWithDescriptionCode,
} from "./code/componentCodes";
import {
  DisabledTextarea,
  ErrorTextarea,
  SimpleTextarea,
  TextareaWithCharacterCount,
  TextareaWithDescription,
} from "./components";

export const textareaData: ComponentCategory = {
  cols: 4,
  title: "Textarea",
  subtitle: "A collection of text areas for collecting longer-form input",
  steps: [
    {
      type: "dependencies",
      libraries: ["clsx", "tailwind-merge"],
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: cnFile,
        },
      ],
    },
    {
      type: "source",
      name: "Textarea.tsx",
      path: "@/components/ui/Textarea.tsx",
      language: "tsx",
      code: textareaCode,
    },
  ],
  components: [
    { title: "Simple Textarea", component: SimpleTextarea, code: simpleTextareaCode },
    { title: "Textarea with Description", component: TextareaWithDescription, code: textareaWithDescriptionCode },
    { title: "Disabled Textarea", component: DisabledTextarea, code: disabledTextareaCode },
    { title: "Error Textarea", component: ErrorTextarea, code: errorTextareaCode },
    { title: "Textarea with Character Count", component: TextareaWithCharacterCount, code: textareaWithCharacterCountCode },
  ],
};
