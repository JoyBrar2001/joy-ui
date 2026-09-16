export const simpleInputCode = `import Input from "@/components/ui/Input";

export function SimpleInput() {
  return <Input label="Username" placeholder="Enter username" />;
}`;

export const inputWithDescriptionCode = `import Input from "@/components/ui/Input";

export function InputWithDescription() {
  return <Input label="Username" description="Use letters and numbers only." placeholder="Enter username" />;
}`;

export const inputWithLeftIconCode = `import { Search } from "lucide-react";
import Input from "@/components/ui/Input";

export function InputWithLeftIcon() {
  return <Input label="Search" placeholder="Search for users..." leftIcon={<Search size={18} />} />;
}`;

export const inputWithRightIconCode = `import { Lock } from "lucide-react";
import Input from "@/components/ui/Input";

export function InputWithRightIcon() {
  return <Input label="Password" type="password" placeholder="Enter password" rightIcon={<Lock size={18} />} />;
}`;

export const inputWithBothIconsCode = `import { Lock, Search } from "lucide-react";
import Input from "@/components/ui/Input";

export function InputWithBothIcons() {
  return <Input label="Search" placeholder="Search for anything" leftIcon={<Search size={18} />} rightIcon={<Lock size={18} />} />;
}`;

export const disabledInputCode = `import Input from "@/components/ui/Input";

export function DisabledInput() {
  return <Input label="Username" defaultValue="JoyBrar2001" description="Username can no longer be changed" disabled />;
}`;

export const errorInputCode = `import Input from "@/components/ui/Input";

export function ErrorInput() {
  return <Input label="Username" defaultValue="JoyBrar" error="Username must contain one numeric value." />;
}`;

export const leftInlineIconCode = `import { Search } from "lucide-react";
import Input from "@/components/ui/Input";

export function LeftInlineIconInput() {
  return <Input label="Search for anything" placeholder="Search for things..." leftInlineIcon={<Search size={16} />} />;
}`;

export const rightInlineIconCode = `import { Send } from "lucide-react";
import Input from "@/components/ui/Input";

export function RightInlineIconInput() {
  return <Input label="Send message" placeholder="Write a message..." rightInlineIcon={<Send size={16} />} />;
}`;
