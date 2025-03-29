import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

export function SecondaryTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="secondary">
          Secondary
        </Button>
      </TooltipTrigger>

      <TooltipContent variant="secondary" side="top">
        Hi, I'm the tooltip
      </TooltipContent>
    </Tooltip>
  );
}