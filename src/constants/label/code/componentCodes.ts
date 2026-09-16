const example = (body: string) => `import { Label } from "@/components/ui/Label";\n\nexport function LabelExample() { return (${body}); }`;
export const basicLabelCode = example(`<div><Label htmlFor="email">Email address</Label><Input id="email" /></div>`);
export const requiredLabelCode = example(`<Label htmlFor="workspace">Workspace name <span aria-hidden="true">*</span><span className="sr-only">required</span></Label>`);
export const descriptionLabelCode = example(`<div><Label htmlFor="display-name">Display name</Label><Input id="display-name" aria-describedby="help" /><p id="help">Shown on your public profile.</p></div>`);
export const checkboxLabelCode = example(`<div><Checkbox id="updates" /><Label htmlFor="updates">Send me product updates</Label></div>`);
export const switchLabelCode = example(`<div><Switch id="notifications" /><Label htmlFor="notifications">Enable notifications</Label></div>`);
export const disabledLabelCode = example(`<div><Label htmlFor="unavailable">Disabled field</Label><Input id="unavailable" disabled /></div>`);
