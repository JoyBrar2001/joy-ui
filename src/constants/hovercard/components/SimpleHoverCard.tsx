import { Button } from "@/components/ui/Button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/HoverCard";

export function SimpleHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="outline">Hover Me</Button>
      </HoverCardTrigger>

      <HoverCardContent className="p-4">
        <h3 className="text-lg font-semibold">Hover Card Title</h3>
        <p className="text-sm text-neutral-500">This is additional information.</p>
      </HoverCardContent>
    </HoverCard>
  );
}