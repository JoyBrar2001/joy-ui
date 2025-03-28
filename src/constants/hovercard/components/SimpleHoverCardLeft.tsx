import { Button } from "@/components/ui/Button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/HoverCard";

export function SimpleHoverCardLeft() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="outline">Hover Left</Button>
      </HoverCardTrigger>
      <HoverCardContent side="left" className="p-4">
        <h3 className="text-lg font-semibold">Hover Card (Left)</h3>
        <p className="text-sm text-neutral-500">This hover card appears to the left.</p>
      </HoverCardContent>
    </HoverCard>
  );
}