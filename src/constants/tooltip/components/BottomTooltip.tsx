import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

export function BottomTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline">
          Bottom
        </Button>
      </TooltipTrigger>

      <TooltipContent side="bottom">
        Hi, I&apos;m the tooltip
      </TooltipContent>
    </Tooltip>
  );
}