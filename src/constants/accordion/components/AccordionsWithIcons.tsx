import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"
import { FireExtinguisher, Pin, TimerIcon } from "lucide-react";

export function AccordionWithIcons() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="pinned">
        <AccordionTrigger>
          <span className="flex items-center gap-2">
            <Pin size={16} className="-rotate-45" /> Pinned Section
          </span>
        </AccordionTrigger>
        <AccordionContent>
          This section has an icon next to the trigger text.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="trending">
        <AccordionTrigger>
          <span className="flex items-center gap-2">
            <FireExtinguisher size={16} /> Trending Topic
          </span>
        </AccordionTrigger>
        <AccordionContent>
          This section is styled with an icon-based trigger.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="newest">
        <AccordionTrigger>
          <span className="flex items-center gap-2">
            <TimerIcon size={16} /> Newest First
          </span>
        </AccordionTrigger>
        <AccordionContent>
          This section is styled with an icon-based trigger.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}