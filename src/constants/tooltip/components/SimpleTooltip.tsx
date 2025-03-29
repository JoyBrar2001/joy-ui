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
        Hi, I&apos;m the tooltip
      </TooltipContent>
    </Tooltip>
  );
}