import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

export function OutlineTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline">
          Outline
        </Button>
      </TooltipTrigger>

      <TooltipContent variant="outline" side="top">
        Hi, I&apos;m the tooltip
      </TooltipContent>
    </Tooltip>
  );
}