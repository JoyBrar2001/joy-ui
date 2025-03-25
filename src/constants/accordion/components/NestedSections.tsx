import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

export function NestedSections() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="features">
        <AccordionTrigger>Feature Overview</AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" collapsible className="ml-4 border-l border-neutral-800 pl-4">
            <AccordionItem value="nested-1">
              <AccordionTrigger>Custom Styling</AccordionTrigger>
              <AccordionContent>
                Tailor the look and feel of the components using CSS or utility classes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="nested-2">
              <AccordionTrigger>State Management</AccordionTrigger>
              <AccordionContent>
                Built-in support for controlled and uncontrolled states.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="performance">
        <AccordionTrigger>Performance Optimizations</AccordionTrigger>
        <AccordionContent>
          Our components are designed for high efficiency and minimal re-renders.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}