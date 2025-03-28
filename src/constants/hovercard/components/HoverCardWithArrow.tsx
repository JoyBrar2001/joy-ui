import { Button } from "@/components/ui/Button";
import { HoverCard, HoverCardArrow, HoverCardContent, HoverCardTrigger } from "@/components/ui/HoverCard";

export function HoverCardWithArrow() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="outline">Arrow</Button>
      </HoverCardTrigger>

      <HoverCardContent className="p-4">
        <h3 className="text-lg font-semibold">Hover Card with Arrow</h3>
        <p className="text-sm text-neutral-500">This hover card has a arrow.</p>

        <HoverCardArrow className="fill-neutral-600" />
      </HoverCardContent>
    </HoverCard>
  );
}