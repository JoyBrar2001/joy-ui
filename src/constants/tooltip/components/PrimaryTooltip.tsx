import { Button } from "@/components/ui/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/Tooltip";

export function PrimaryTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="primary">
          Primary
        </Button>
      </TooltipTrigger>

      <TooltipContent variant="primary" side="top">
        Hi, I&apos;m the tooltip
      </TooltipContent>
    </Tooltip>
  );
}