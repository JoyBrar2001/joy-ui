import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

export function GhostTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="ghost">
          Ghost
        </Button>
      </TooltipTrigger>

      <TooltipContent variant="ghost" side="bottom">
        Hi, I&apos;m the tooltip
      </TooltipContent>
    </Tooltip>
  );
}