import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";
import { ComponentCategory } from "../data";

export const tooltipData: ComponentCategory = {
  cols: 4,
  title: "Tooltip",
  subtitle: "A collection of Tooltips for you to use",
  steps: [
    {
      type: "dependencies",
      libraries: [
        "clsx",
        "tailwind-merge",
        "@radix-ui/react-tooltip"
      ]
    },
    {
      type: "utilities",
      files: [
        {
          name: "cn.ts",
          path: "@/utils/cn.ts",
          language: "typescript",
          code: `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
return twMerge(clsx(inputs));
}`
        },
        {
          name: "globals.css",
          path: "@/globals.css",
          language: "css",
          code: `@import "tailwindcss";
          
@theme {
  --animate-slideUpAndFadeIn: slideUpAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideDownAndFadeIn: slideDownAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideLeftAndFadeIn: slideLeftAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideRightAndFadeIn: slideRightAndFadeIn 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideDownAndFadeOut: slideDownAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideUpAndFadeOut: slideUpAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideLeftAndFadeOut: slideLeftAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);
  --animate-slideRightAndFadeOut: slideRightAndFadeOut 0.4S cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes slideUpAndFadeIn {
    from {
      opacity: 0;
      transform: translateY(10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideDownAndFadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes slideLeftAndFadeIn {
    from {
      opacity: 0;
      transform: translateX(10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes slideRightAndFadeIn {
    from {
      opacity: 0;
      transform: translateX(-10px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes slideDownAndFadeOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(10px) scale(0.96);
    }
  }

  @keyframes slideUpAndFadeOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateY(-10px) scale(0.96);
    }
  }

  @keyframes slideLeftAndFadeOut {
    from {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(-10px) scale(0.96);
    }
  }

  @keyframes slideRightAndFadeOut {
    from {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(10px) scale(0.96);
    }
  }
}`
        }
      ]
    },
    {
      type: "source",
      name: "Tooltip.tsx",
      path: "@/components/ui/Tooltip.tsx",
      language: "tsx",
      code: `import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/utils";

type TooltipProps = {
children: React.ReactNode;
};

export function Tooltip({ children }: TooltipProps) {
return (
  <TooltipPrimitive.Provider>
    <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>
  </TooltipPrimitive.Provider>
);
}

export function TooltipTrigger({ children }: TooltipProps) {
return (
  <TooltipPrimitive.Trigger asChild>
    {children}
  </TooltipPrimitive.Trigger>
);
}

type TooltipContentProps = {
children: React.ReactNode;
variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive" | "custom";
size?: "xs" | "sm" | "md" | "lg" | "xl";
side?: "top" | "right" | "bottom" | "left";
sideOffset?: number;
className?: string;
};

export function TooltipContent({
children,
variant = "primary",
size = "md",
side = "top",
sideOffset = 5,
className = "",
}: TooltipContentProps) {
const variantClasses = {
  primary:
    "bg-black text-white hover:bg-neutral-900 dark:bg-white dark:text-black dark:hover:bg-neutral-200",
  secondary:
    "bg-neutral-200 text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
  outline:
    "border border-neutral-300 text-black hover:bg-neutral-100 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800",
  ghost: "text-neutral-500 hover:text-black dark:hover:text-white",
  destructive: "bg-red-500 hover:bg-red-600 text-white",
  custom: className,
};

const sizeClasses = {
  xs: "text-xs px-1 py-0.5",
  sm: "text-sm px-2 py-1",
  md: "text-base px-3 py-1.5",
  lg: "text-lg px-4 py-2",
  xl: "text-xl px-5 py-2.5",
};

const animationClasses = {
  top: "data-[state=delayed-open]:animate-slideUpAndFadeIn data-[state=closed]:animate-slideDownAndFadeOut",
  bottom: "data-[state=delayed-open]:animate-slideDownAndFadeIn data-[state=closed]:animate-slideUpAndFadeOut",
  left: "data-[state=delayed-open]:animate-slideLeftAndFadeIn data-[state=closed]:animate-slideRightAndFadeOut",
  right: "data-[state=delayed-open]:animate-slideRightAndFadeIn data-[state=closed]:animate-slideLeftAndFadeOut",
};

return (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      className={cn(
        "select-none rounded shadow-lg",
        animationClasses[side],
        variantClasses[variant] || className,
        sizeClasses[size]
      )}
      sideOffset={sideOffset}
      side={side}
    >
      {children}
    </TooltipPrimitive.Content>
  </TooltipPrimitive.Portal>
);
}
      `
    }
  ],
  components: [
    {
      title: "Simple Tooltip",
      component: () => <Tooltip>
        <TooltipTrigger>
          <Button>
            Hover on me
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          Hi, I'm the tooltip
        </TooltipContent>
      </Tooltip>
    },
    {
      title: "Top Tooltip",
      component: () => <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">
            Top
          </Button>
        </TooltipTrigger>

        <TooltipContent side="top">
          Hi, I'm the tooltip
        </TooltipContent>
      </Tooltip>
    },
    {
      title: "Left Tooltip",
      component: () => <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">
            Left
          </Button>
        </TooltipTrigger>

        <TooltipContent side="left">
          Hi, I'm the tooltip
        </TooltipContent>
      </Tooltip>
    },
    {
      title: "Right Tooltip",
      component: () => <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">
            Right
          </Button>
        </TooltipTrigger>

        <TooltipContent side="right">
          Hi, I'm the tooltip
        </TooltipContent>
      </Tooltip>
    },
    {
      title: "Bottom Tooltip",
      component: () => <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">
            Bottom
          </Button>
        </TooltipTrigger>

        <TooltipContent side="bottom">
          Hi, I'm the tooltip
        </TooltipContent>
      </Tooltip>
    },
    {
      title: "Primary Tooltip",
      component: () => <Tooltip>
        <TooltipTrigger>
          <Button variant="primary">
            Primary
          </Button>
        </TooltipTrigger>

        <TooltipContent variant="primary" side="top">
          Hi, I'm the tooltip
        </TooltipContent>
      </Tooltip>
    },
    {
      title: "Secondary Tooltip",
      component: () => <Tooltip>
        <TooltipTrigger>
          <Button variant="secondary">
            Secondary
          </Button>
        </TooltipTrigger>

        <TooltipContent variant="secondary" side="top">
          Hi, I'm the tooltip
        </TooltipContent>
      </Tooltip>
    },
    {
      title: "Outline Tooltip",
      component: () => <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">
            Outline
          </Button>
        </TooltipTrigger>

        <TooltipContent variant="outline" side="top">
          Hi, I'm the tooltip
        </TooltipContent>
      </Tooltip>
    },
    {
      title: "Destructive Tooltip",
      component: () => <Tooltip>
        <TooltipTrigger>
          <Button variant="destructive">
            Destructive
          </Button>
        </TooltipTrigger>

        <TooltipContent variant="destructive" side="top">
          Hi, I'm the tooltip
        </TooltipContent>
      </Tooltip>
    },
    {
      title: "Ghost Tooltip",
      component: () => <Tooltip>
        <TooltipTrigger>
          <Button variant="ghost">
            Ghost
          </Button>
        </TooltipTrigger>

        <TooltipContent variant="ghost" side="bottom">
          Hi, I'm the tooltip
        </TooltipContent>
      </Tooltip>
    },
  ],
};