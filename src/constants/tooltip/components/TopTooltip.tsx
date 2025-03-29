import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

export function TopTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline">
          Top
        </Button>
      </TooltipTrigger>

      <TooltipContent side="top">
        Hi, I&apos;m the tooltip
      </TooltipContent>
    </Tooltip >
  );
}