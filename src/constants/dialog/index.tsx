import { ComponentCategory } from "../data";
import { cnFile } from "../common";
import { dialogCode } from "./code/dialogCode";
import { dialogCss } from "./code/dialogCss";
import {
  controlledDialogCode,
  customStyledDialogCode,
  signInDialogCode,
  signInDialogWithRtkAndZodCode,
  signInDialogWithRtkCode,
  signUpDialogCode,
  simpleDialogCode,
  stickyHeaderDialogCode,
  termsDialogCode,
} from "./code/componentCodes";
import {
  ControlledDialog,
  CustomStyledDialog,
  SignInDialog,
  SignInDialogWithRTK,
  SignInDialogWithRTKAndZod,
  SignUpDialog,
  SimpleDialog,
  StickyHeaderDialog,
  TermsDialog,
} from "./components";

export const dialogData: ComponentCategory = {
  cols: 4,
  title: "Dialog",
  subtitle: "A collection of Dialogs for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: ["clsx", "tailwind-merge", "@radix-ui/react-dialog"],
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
        {
          name: "globals.css",
          path: "@/globals.css",
          language: "css",
          code: dialogCss,
        },
      ],
    },
    {
      type: "source",
      name: "Dialog.tsx",
      path: "@/components/ui/Dialog.tsx",
      language: "tsx",
      code: dialogCode,
    },
  ],
  components: [
    {
      title: "Simple Dialog",
      component: SimpleDialog,
      code: simpleDialogCode,
    },
    {
      title: "Simple Dialog (Controlled)",
      component: ControlledDialog,
      code: controlledDialogCode,
    },
    {
      title: "Custom Styled Dialog",
      component: CustomStyledDialog,
      code: customStyledDialogCode,
    },
    {
      title: "Sticky Header Dialog",
      component: StickyHeaderDialog,
      code: stickyHeaderDialogCode,
    },
    {
      title: "Terms & Conditions Dialog",
      component: TermsDialog,
      code: termsDialogCode,
    },
    {
      title: "Sign in Dialog",
      component: SignInDialog,
      code: signInDialogCode,
    },
    {
      title: "Sign in Dialog with RTK",
      component: SignInDialogWithRTK,
      code: signInDialogWithRtkCode,
    },
    {
      title: "Sign in Dialog with RTK and Zod",
      component: SignInDialogWithRTKAndZod,
      code: signInDialogWithRtkAndZodCode,
    },
    {
      title: "Sign up Dialog",
      component: SignUpDialog,
      code: signUpDialogCode,
    },
  ],
};
