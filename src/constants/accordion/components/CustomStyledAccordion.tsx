import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

export function CustomStyledAccordion() {
  return (
    <Accordion type="single" collapsible className="bg-gradient-to-r from-blue-500 to-sky-500 rounded-md p-4">
      <AccordionItem value="unique-design">
        <AccordionTrigger className="bg-white text-neutral-800 px-4 py-2 rounded-t-md">
          Unique Design
        </AccordionTrigger>
        <AccordionContent className="bg-sky-500 text-white">
          This accordion has a gradient background and custom styling for a modern look.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="animations">
        <AccordionTrigger className="bg-white text-neutral-800 px-4 py-2">
          Smooth Animations
        </AccordionTrigger>
        <AccordionContent className="bg-sky-500 text-white">
          Includes custom animations for a sleek user experience.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="dark-mode">
        <AccordionTrigger className="bg-white text-neutral-800 px-4 py-2 rounded-b-md data-[state=open]:rounded-none">
          Dark Mode Ready
        </AccordionTrigger>
        <AccordionContent className="bg-sky-500 text-white">
          Perfect for dark-themed websites with consistent styling.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}