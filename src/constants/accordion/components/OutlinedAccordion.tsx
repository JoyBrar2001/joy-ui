import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

export function OutlinedAccordion() {
  return (
    <Accordion type="single" collapsible className="border border-neutral-800 rounded-md">
      <AccordionItem value="installation">
        <AccordionTrigger>Installation Guide</AccordionTrigger>
        <AccordionContent>
          Install the package using npm or yarn and start building your UI instantly.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="integration">
        <AccordionTrigger>Easy Integration</AccordionTrigger>
        <AccordionContent>
          Works seamlessly with popular frameworks like React, Next.js, and Vue.js.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="support">
        <AccordionTrigger>Comprehensive Documentation</AccordionTrigger>
        <AccordionContent>
          Detailed documentation and examples to help you get started quickly.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}