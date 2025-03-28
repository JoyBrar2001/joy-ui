import { Button } from "@/components/ui/Button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/HoverCard";

export function SimpleHoverCardRight() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="outline">Hover Right</Button>
      </HoverCardTrigger>
      <HoverCardContent side="right" className="p-4">
        <h3 className="text-lg font-semibold">Hover Card (Right)</h3>
        <p className="text-sm text-neutral-500">This hover card appears to the right.</p>
      </HoverCardContent>
    </HoverCard>
  );
}