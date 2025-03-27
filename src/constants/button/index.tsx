import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { buttonCode } from "./code/buttonCode";
import {
  AuthButtonsWithTitles,
  AuthIconButtons,
  ButtonWithCustomAnimation,
  ButtonWithLoadingState,
  ColoredAuthButtonsWithTitles,
  CopyButton,
  CustomVariantButton,
  DestructiveButton,
  DisabledOutlineButton,
  DisabledPrimaryButton,
  DisabledWhileLoadingButton,
  FullWidthButton,
  GhostButton,
  OutlineButton,
  PrimaryButton,
  PrimaryButtonWithBothIcons,
  PrimaryButtonWithLeftIcon,
  PrimaryButtonWithRightIcon,
  RightIconWithAnimation,
  SecondaryButton,
  SpacedBetweenButton
} from "./components";
import {
  authButtonsWithTitlesCode,
  authIconButtonsCode,
  buttonWithCustomAnimationCode,
  buttonWithLoadingStateCode,
  coloredAuthButtonsWithTitlesCode,
  copyButtonCode,
  customVariantButtonCode,
  destructiveButtonCode,
  disabledOutlineButtonCode,
  disabledPrimaryButtonCode,
  disabledWhileLoadingButtonCode,
  fullWidthButtonCode,
  ghostButtonCode,
  outlinedButtonCode,
  primaryButtonCode,
  primaryButtonWithBothIconsCode,
  primaryButtonWithLeftIconCode,
  primaryButtonWithRightIconCode,
  rightIconWithAnimationCode,
  secondaryButtonCode,
  spacedBetweenButtonCode
} from "./code/componentCodes";


export const buttonData: ComponentCategory = {
  cols: 4,
  title: "Button",
  subtitle: "A collection of buttons to choose from.",
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
      name: "Button.tsx",
      path: "@/components/ui/Button.tsx",
      language: "tsx",
      code: buttonCode,
    },
  ],
  components: [
    {
      title: "Primary Button",
      component: PrimaryButton,
      code: primaryButtonCode,
    },
    {
      title: "Secondary Button",
      component: SecondaryButton,
      code: secondaryButtonCode,
    },
    {
      title: "Outline Button",
      component: OutlineButton,
      code: outlinedButtonCode,
    },
    {
      title: "Ghost Button",
      component: GhostButton,
      code: ghostButtonCode,
    },
    {
      title: "Destructive Button",
      component: DestructiveButton,
      code: destructiveButtonCode,
    },
    {
      title: "Primary Button with Left Icon",
      component: PrimaryButtonWithLeftIcon,
      code: primaryButtonWithLeftIconCode,
    },
    {
      title: "Primary Button with Right Icon",
      component: PrimaryButtonWithRightIcon,
      code: primaryButtonWithRightIconCode,
    },
    {
      title: "Primary Button with Both Icons",
      component: PrimaryButtonWithBothIcons,
      code: primaryButtonWithBothIconsCode,
    },
    {
      title: "Disabled Primary Button",
      component: DisabledPrimaryButton,
      code: disabledPrimaryButtonCode,
    },
    {
      title: "Disabled Outline Button",
      component: DisabledOutlineButton,
      code: disabledOutlineButtonCode,
    },
    {
      title: "Full Width button",
      component: FullWidthButton,
      code: fullWidthButtonCode,
    },
    {
      title: "Spaced Between Button",
      component: SpacedBetweenButton,
      code: spacedBetweenButtonCode,
    },
    {
      title: "Right Icon with Animation",
      component: RightIconWithAnimation,
      code: rightIconWithAnimationCode,
    },
    {
      title: "Button with Custom Animation",
      component: ButtonWithCustomAnimation,
      code: buttonWithCustomAnimationCode,
    },
    {
      title: "Button with Loading State",
      component: ButtonWithLoadingState,
      code: buttonWithLoadingStateCode,
    },
    {
      title: "Disabled while Loading button",
      component: DisabledWhileLoadingButton,
      code: disabledWhileLoadingButtonCode,
    },
    {
      title: "Custom Variant Button",
      component: CustomVariantButton,
      code: customVariantButtonCode,
    },
    {
      title: "Copy Button",
      component: CopyButton,
      code: copyButtonCode,
    },
    {
      title: "Auth Icon Buttons",
      component: AuthIconButtons,
      code: authIconButtonsCode,
    },
    {
      title: "Auth Buttons with Titles",
      component: AuthButtonsWithTitles,
      code: authButtonsWithTitlesCode,
    },
    {
      title: "Colored Auth Buttons with Titles",
      component: ColoredAuthButtonsWithTitles,
      code: coloredAuthButtonsWithTitlesCode,
    },
  ],
};
