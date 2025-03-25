import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

export function LeftIcons() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="installation">
        <AccordionTrigger left>Installation Guide</AccordionTrigger>
        <AccordionContent>
          Install the package using npm or yarn and start building your UI instantly.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="integration">
        <AccordionTrigger left>Easy Integration</AccordionTrigger>
        <AccordionContent>
          Works seamlessly with popular frameworks like React, Next.js, and Vue.js.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="support">
        <AccordionTrigger left>Comprehensive Documentation</AccordionTrigger>
        <AccordionContent>
          Detailed documentation and examples to help you get started quickly.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}