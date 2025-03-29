import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

export function SimpleTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button>
          Hover on me
        </Button>
      </TooltipTrigger>

      <TooltipContent>
        Hi, I'm the tooltip
      </TooltipContent>
    </Tooltip>
  );
}