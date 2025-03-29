import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

export function LeftTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline">
          Left
        </Button>
      </TooltipTrigger>

      <TooltipContent side="left">
        Hi, I'm the tooltip
      </TooltipContent>
    </Tooltip>
  );
}