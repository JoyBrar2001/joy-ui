export const accordionWithIconsCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"
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
}`;

export const customStyledAccordionCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

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
}`;

export const leftIconsCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

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
}`;

export const nestedSectionsCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

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
}`;

export const outlinedAccordionCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

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
}`;

export const simpleAccordionCode = `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion"

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
}`;