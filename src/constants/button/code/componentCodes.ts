export const authButtonsWithTitlesCode = `import { Button } from "@/components/ui/Button";
import { FaGoogle, FaGithub, FaTwitter, FaMicrosoft } from "react-icons/fa";

export function AuthButtonsWithTitles() {
  return (
    <div className="flex flex-col justify-start gap-2 mx-auto">
      <Button className="px-12" variant="outline" leftIcon={<FaGoogle className="size-4" />}>
        Login with Google
      </Button>
      <Button className="px-12" variant="outline" leftIcon={<FaGithub className="size-4" />}>
        Login with Github
      </Button>
      <Button className="px-12" variant="outline" leftIcon={<FaTwitter className="size-4" />}>
        Login with Twitter
      </Button>
      <Button className="px-12" variant="outline" leftIcon={<FaMicrosoft className="size-4" />}>
        Login with Microsoft
      </Button>
    </div>
  );
}`;

export const authIconButtonsCode = `import { Button } from "@/components/ui/Button";
import { FaGoogle, FaGithub, FaTwitter, FaMicrosoft } from "react-icons/fa";

export function AuthIconButtons() {
  return (
    <div className="w-full flex justify-start gap-2">
      <Button variant="outline" className="w-full">
        <FaGoogle className="size-4" />
      </Button>
      <Button variant="outline" className="w-full">
        <FaGithub className="size-4" />
      </Button>
      <Button variant="outline" className="w-full">
        <FaTwitter className="size-4" />
      </Button>
      <Button variant="outline" className="w-full">
        <FaMicrosoft className="size-4" />
      </Button>
    </div>
  );
}`;

export const buttonWithCustomAnimationCode = `import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

export function ButtonWithCustomAnimation() {
  return (
    <Button
      variant="primary"
      className="hover:scale-105 active:scale-95"
      rightIcon={
        <Send className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
      }
    >
      Send
    </Button>
  );
}`;

export const buttonWithLoadingStateCode = `import { Button } from "@/components/ui/Button";

export function ButtonWithLoadingState() {
  return (
    <Button variant="primary" isLoading={true}>
      Send
    </Button>
  );
}`;

export const coloredAuthButtonsWithTitlesCode = `import { Button } from "@/components/ui/Button";
import { FaGoogle, FaGithub, FaTwitter, FaMicrosoft } from "react-icons/fa";

export function ColoredAuthButtonsWithTitles() {
  return (
    <div className="flex flex-col justify-start gap-2 mx-auto">
      <Button variant="custom" className="bg-rose-500 hover:bg-rose-600 px-12" leftIcon={<FaGoogle className="size-4" />}>
        Login with Google
      </Button>
      <Button variant="custom" className="bg-neutral-500 hover:bg-neutral-600 px-12" leftIcon={<FaGithub className="size-4" />}>
        Login with Github
      </Button>
      <Button variant="custom" className="bg-sky-500 hover:bg-sky-600 px-12" leftIcon={<FaTwitter className="size-4" />}>
        Login with Twitter
      </Button>
      <Button variant="custom" className="bg-amber-500 hover:bg-amber-600 px-12" leftIcon={<FaMicrosoft className="size-4" />}>
        Login with Microsoft
      </Button>
    </div>
  );
}`;

export const copyButtonCode = `"use client";

import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";
import { cn } from "@/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ props }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("You just copied some text :D");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tooltip>
      <TooltipTrigger>
        <Button {...props} variant="outline" className="relative size-4 p-4" onClick={handleCopy}>
          <Check size={15} className={cn(
            "absolute left-1/2 top-1/2 -translate-1/2 scale-0 opacity-0 transition-all duration-300",
            copied && "scale-100 opacity-100"
          )} />
          <Copy size={15} className={cn(
            "absolute left-1/2 top-1/2 -translate-1/2 scale-100 opacity-100 transition-all duration-300",
            copied && "scale-0 opacity-0"
          )} />
        </Button>
      </TooltipTrigger>
      <TooltipContent size="xs">
        Click to copy code
      </TooltipContent>
    </Tooltip>
  );
}`;

export const customVariantButtonCode = `import { Button } from "@/components/ui/Button";

export function CustomVariantButton() {
  return (
    <Button
      variant="custom"
      className="text-black bg-green-200 hover:scale-105 active:scale-95"
      rightIcon={
        <div className="relative">
          <div className="bg-green-500 size-4 rounded-full animate-ping" />
          <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-green-500 size-2 rounded-full" />
        </div>
      }
    >
      Online
    </Button>
  );
}`;

export const destructiveButtonCode = `import { Button } from "@/components/ui/Button";

export function DestructiveButton() {
  return (
    <Button variant="destructive">Destructive</Button>
  );
}`;

export const disabledOutlineButtonCode = `import { Button } from "@/components/ui/Button";

export function DisabledOutlineButton() {
  return (
    <Button variant="outline" disabled>Disabled</Button>
  );
}`;

export const disabledPrimaryButtonCode = `import { Button } from "@/components/ui/Button";

export function DisabledPrimaryButton() {
  return (
    <Button variant="primary" disabled>Disabled</Button>
  );
}`;

export const disabledWhileLoadingButtonCode = `import { Button } from "@/components/ui/Button";

export function DisabledWhileLoadingButton() {
  return (
    <Button variant="primary" isLoading={true} disabled={true}>
      Send
    </Button>
  );
}`;

export const fullWidthButtonCode = `import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FullWidthButton() {
  return (
    <Button
      className="w-full"
      variant="primary"
      rightIcon={<ArrowRight className="size-4" />}
    >
      Full width
    </Button>
  );
}`;

export const ghostButtonCode = `import { Button } from "@/components/ui/Button";

export function GhostButton() {
  return (
    <Button variant="ghost">Ghost</Button>
  );
}`;

export const outlinedButtonCode = `import { Button } from "@/components/ui/Button";

export function OutlineButton() {
  return (
    <Button variant="outline">Outline</Button>
  );
}`;

export const primaryButtonCode = `import { Button } from "@/components/ui/Button";

export function PrimaryButton() {
  return (
    <Button>Primary</Button>
  );
}`;

export const primaryButtonWithBothIconsCode = `import { Button } from "@/components/ui/Button";
import { ArrowRight, Search } from "lucide-react";

export function PrimaryButtonWithBothIcons() {
  return (
    <Button
      variant="primary"
      leftIcon={<Search className="size-4" />}
      rightIcon={<ArrowRight className="size-4" />}
    >
      Search
    </Button>
  );
}`;

export const primaryButtonWithLeftIconCode = `import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";

export function PrimaryButtonWithLeftIcon() {
  return (
    <Button variant="primary" leftIcon={<Search className="size-4" />}>
      Search
    </Button>
  );
}`;

export const primaryButtonWithRightIconCode = `import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function PrimaryButtonWithRightIcon() {
  return (
    <Button variant="primary" rightIcon={<ArrowRight className="size-4" />}>
      Next
    </Button>
  );
}`;

export const rightIconWithAnimationCode = `import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function RightIconWithAnimation() {
  return (
    <Button
      variant="primary"
      className="hover:scale-105 active:scale-95"
      rightIcon={<ArrowRight className="size-4 group-hover:translate-x-1 transition" />}
    >
      Next
    </Button>
  );
}`;

export const secondaryButtonCode = `import { Button } from "@/components/ui/Button";

export function SecondaryButton() {
  return (
    <Button variant="secondary">Secondary</Button>
  );
}`;

export const spacedBetweenButtonCode = `import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function SpacedBetweenButton() {
  return (
    <Button
      className="w-full justify-between"
      variant="primary"
      rightIcon={<ArrowRight className="size-4" />}
    >
      Full width
    </Button>
  );
}`;