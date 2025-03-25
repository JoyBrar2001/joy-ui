import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

export function SimpleAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="ui-components">
        <AccordionTrigger>High-Quality UI Components</AccordionTrigger>
        <AccordionContent>
          Our library offers well-designed, accessible, and customizable UI components for modern web applications.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="performance">
        <AccordionTrigger>Optimized for Performance</AccordionTrigger>
        <AccordionContent>
          The components are lightweight and optimized for speed, ensuring a smooth user experience.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="customization">
        <AccordionTrigger>Fully Customizable</AccordionTrigger>
        <AccordionContent>
          You can easily modify colors, styles, and animations to fit your brand’s identity.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}