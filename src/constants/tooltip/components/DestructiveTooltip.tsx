import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

export function DestructiveTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="destructive">
          Destructive
        </Button>
      </TooltipTrigger>

      <TooltipContent variant="destructive" side="top">
        Hi, I&apos;m the tooltip
      </TooltipContent>
    </Tooltip>
  );
}