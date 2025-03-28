import { cnFile } from "../common";
import { ComponentCategory } from "../data";
import { CardSwitch, CardSwitchWithIcon, CustomStyledCheckbox, DefaultCheckedSwitch, DynamicLabelCheckbox, LabeledCheckbox, LightDarkDual, LightDarkSimple, OnOffDual, OnOffSingle, SimpleSwitch, SquareCheckbox, SwitchSmall, ThinCheckbox } from "./components";

export const switchData: ComponentCategory = {
  cols: 4,
  title: "Switch",
  subtitle: "A collection of Switches for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-switch"
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
      name: "Drawer.tsx",
      path: "@/components/ui/Drawer.tsx",
      language: "tsx",
      code: `import { cn } from "@/utils";
import * as SwitchPrimitive from "@radix-ui/react-switch"

export function Switch({ children, className, ...props }: SwitchPrimitive.SwitchProps) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "relative h-6 w-10 cursor-default rounded-full bg-neutral-800 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black transition data-[state=checked]:bg-white",
        className
      )}
      id="airplane-mode"
      {...props}
    >
      {children || (
        <SwitchThumb />
      )}
    </SwitchPrimitive.Root>
  );
}

export function SwitchThumb({ className, ...props }: SwitchPrimitive.SwitchThumbProps) {
  return (
    <SwitchPrimitive.Thumb
      className={cn(
        "block size-5 translate-x-0.5 rounded-full bg-black transition-transform duration-250 will-change-transform data-[state=checked]:translate-x-[18px]",
        className
      )}
      {...props}
    />
  );
}`
    }
  ],
  components: [
    {
      title: "Simple Switch",
      component: SimpleSwitch
    },
    {
      title: "Switch (sm)",
      component: SwitchSmall
    },
    {
      title: "Default Checked",
      component: DefaultCheckedSwitch
    },
    {
      title: "Custom Styled Checked",
      component: CustomStyledCheckbox
    },
    {
      title: "Suqare Checkbox",
      component: SquareCheckbox
    },
    {
      title: "Thin Checkbox",
      component: ThinCheckbox
    },
    {
      title: "Labeled Checkbox",
      component: LabeledCheckbox
    },
    {
      title: "Interactive Checkbox",
      component: DynamicLabelCheckbox
    },
    {
      title: "Light Dark Toggler",
      component: LightDarkSimple
    },
    {
      title: "Another Light Dark",
      component: LightDarkDual
    },
    {
      title: "On Off Toggler",
      component: OnOffSingle
    },
    {
      title: "Another On Off Toggler",
      component: OnOffDual
    },
    {
      title: "Card Switch",
      component: CardSwitch
    },
    {
      title: "Card Switch with Icon",
      component: CardSwitchWithIcon
    },
  ]
}