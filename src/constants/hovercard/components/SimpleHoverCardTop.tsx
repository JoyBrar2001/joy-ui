import { Button } from "@/components/ui/Button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/HoverCard";

export function SimpleHoverCardTop() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="outline">Hover Top</Button>
      </HoverCardTrigger>
      <HoverCardContent side="top" className="p-4">
        <h3 className="text-lg font-semibold">Hover Card (Top)</h3>
        <p className="text-sm text-neutral-500">This hover card appears at the top.</p>
      </HoverCardContent>
    </HoverCard>
  );
}