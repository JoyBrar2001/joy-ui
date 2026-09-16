const example = (body: string) => `import { useState } from "react";\nimport { Eye, EyeOff } from "lucide-react";\nimport { Input } from "@/components/ui/Input";\n\nexport function PasswordExample() { return (${body}); }`;
const input = (label: string, placeholder: string) => `<Input label="${label}" type={visible ? "text" : "password"} placeholder="${placeholder}" rightInlineIcon={<button type="button" onClick={() => setVisible(!visible)}>{visible ? <EyeOff /> : <Eye />}</button>} />`;
export const basicPasswordCode = example(input("Password", "Enter password"));
export const newPasswordCode = example(input("New password", "Create a password"));
export const strengthPasswordCode = example(`<div>${input("Password", "Enter a strong password")}<div className="flex gap-1">{rules.map((rule) => <span className={rule.valid ? "bg-emerald-500" : "bg-neutral-200"} />)}</div></div>`);
export const confirmPasswordCode = example(`<div className="grid gap-3">${input("New password", "New password")}<Input label="Confirm password" error={passwordsMatch ? undefined : "Passwords do not match."} /></div>`);
export const hintPasswordCode = example(`<div>${input("Account password", "Your account password")}<p>Use at least 8 characters with a number.</p></div>`);
export const controlledPasswordCode = example(`<Input label="Controlled password" type={visible ? "text" : "password"} rightInlineIcon={<button type="button" onClick={() => setVisible(!visible)}>{visible ? <EyeOff /> : <Eye />}</button>} />`);
