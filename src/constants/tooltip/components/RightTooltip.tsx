import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

export function RightTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline">
          Right
        </Button>
      </TooltipTrigger>

      <TooltipContent side="right">
        Hi, I&apos;m the tooltip
      </TooltipContent>
    </Tooltip>
  );
}