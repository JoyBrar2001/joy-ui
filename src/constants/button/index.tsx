import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { buttonCode } from "./code/buttonCode";
import { AuthButtonsWithTitles, AuthIconButtons, ButtonWithCustomAnimation, ButtonWithLoadingState, ColoredAuthButtonsWithTitles, CopyButton, CustomVariantButton, DestructiveButton, DisabledOutlineButton, DisabledPrimaryButton, DisabledWhileLoadingButton, FullWidthButton, GhostButton, OutlineButton, PrimaryButton, PrimaryButtonWithBothIcons, PrimaryButtonWithLeftIcon, PrimaryButtonWithRightIcon, RightIconWithAnimation, SecondaryButton, SpacedBetweenButton } from "./components";

export const buttonData: ComponentCategory = {
  cols: 4,
  title: "Button",
  subtitle: "A collection of buttons to choose from.",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge"
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
      name: "Button.tsx",
      path: "@/components/ui/Button.tsx",
      language: "tsx",
      code: buttonCode
    }
  ],
  components: [
    {
      title: "Primary Button",
      component: PrimaryButton
    },
    {
      title: "Secondary Button",
      component: SecondaryButton
    },
    {
      title: "Outline Button",
      component: OutlineButton
    },
    {
      title: "Ghost Button",
      component: GhostButton
    },
    {
      title: "Destructive Button",
      component: DestructiveButton
    },
    {
      title: "Primary Button with Left Icon",
      component: PrimaryButtonWithLeftIcon
    },
    {
      title: "Primary Button with Right Icon",
      component: PrimaryButtonWithRightIcon
    },
    {
      title: "Primary Button with Both Icons",
      component: PrimaryButtonWithBothIcons
    },
    {
      title: "Disabled Primary Button",
      component: DisabledPrimaryButton
    },
    {
      title: "Disabled Outline Button",
      component: DisabledOutlineButton
    },
    {
      title: "Full Width button",
      component: FullWidthButton
    },
    {
      title: "Spaced Between Button",
      component: SpacedBetweenButton
    },
    {
      title: "Right Icon with Animation",
      component: RightIconWithAnimation
    },
    {
      title: "Button with Custom Animation",
      component: ButtonWithCustomAnimation
    },
    {
      title: "Button with Loading State",
      component: ButtonWithLoadingState
    },
    {
      title: "Disabled while Loading button",
      component: DisabledWhileLoadingButton
    },
    {
      title: "Custom Variant Button",
      component: CustomVariantButton
    },
    {
      title: "Copy Button",
      component: CopyButton,
    },
    {
      title: "Auth Icon Buttons",
      component: AuthIconButtons
    },
    {
      title: "Auth Buttons with Titles",
      component: AuthButtonsWithTitles
    },
    {
      title: "Colored Auth Buttons with Titles",
      component: ColoredAuthButtonsWithTitles
    },
  ],
};