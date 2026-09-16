const example = (body: string) => `import { Form, FormControl, FormField, FormLabel, FormMessage, FormSubmit } from "@/components/ui/Form";\n\nexport function FormExample() { return (${body}); }`;
export const basicFormCode = example(`<Form onSubmit={(event) => event.preventDefault()}><FormField name="email"><FormLabel>Email</FormLabel><FormControl type="email" required /><FormMessage match="valueMissing">Email is required.</FormMessage></FormField><FormSubmit>Continue</FormSubmit></Form>`);
export const validationFormCode = example(`<Form onSubmit={(event) => event.preventDefault()}><FormField name="username"><FormLabel>Username</FormLabel><FormControl pattern="^[a-z]+$" required /><FormMessage match="patternMismatch">Lowercase letters only.</FormMessage></FormField><FormSubmit>Save</FormSubmit></Form>`);
export const labelFormCode = example(`<Form><FormField name="project"><FormLabel>Project name</FormLabel><FormControl placeholder="Joy UI" /></FormField></Form>`);
export const multipleFormCode = example(`<Form><FormField name="firstName"><FormLabel>First name</FormLabel><FormControl /></FormField><FormField name="role"><FormLabel>Role</FormLabel><FormControl /></FormField><FormSubmit>Update profile</FormSubmit></Form>`);
export const messageFormCode = example(`<Form><FormField name="invite"><FormLabel>Invite code</FormLabel><FormControl required minLength={8} /><FormMessage match="tooShort">Code is too short.</FormMessage></FormField></Form>`);
export const serverFormCode = example(`<Form><FormField name="account" serverInvalid><FormLabel>Account email</FormLabel><FormControl type="email" /><FormMessage match="valid" forceMatch>Account is already connected.</FormMessage></FormField></Form>`);
export const signInFormCode = example(`<Form><FormField name="email"><FormLabel>Email</FormLabel><FormControl type="email" required /><FormMessage match="valueMissing">Email is required.</FormMessage></FormField><FormField name="password"><FormLabel>Password</FormLabel><FormControl type="password" minLength={6} required /><FormMessage match="tooShort">Password must be at least 6 characters.</FormMessage></FormField><FormSubmit>Sign in</FormSubmit></Form>`);
export const profileFormCode = `import { Form, FormControl, FormField, FormLabel, FormSubmit } from "@/components/ui/Form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

export function ProfileCreationForm() {
  return <Form onSubmit={(event) => event.preventDefault()}>
    <FormField name="name"><FormLabel>Full name</FormLabel><FormControl required /></FormField>
    <FormLabel>Role</FormLabel><Select><SelectTrigger><SelectValue placeholder="Select your role" /></SelectTrigger><SelectContent><SelectItem value="designer">Designer</SelectItem><SelectItem value="engineer">Engineer</SelectItem></SelectContent></Select>
    <FormLabel>Experience</FormLabel><RadioGroup defaultValue="mid"><RadioGroupItem value="junior" /> Junior <RadioGroupItem value="mid" /> Mid-level</RadioGroup>
    <FormSubmit>Create profile</FormSubmit>
  </Form>;
}`;
export const signInHookFormCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";

const schema = z.object({ email: z.string().email(), password: z.string().min(6) });
export function SignInWithReactHookForm() { const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(schema) }); return <form onSubmit={handleSubmit(console.log)}><Input {...register("email")} error={errors.email?.message} /><Input {...register("password")} type="password" error={errors.password?.message} /><button>Sign in</button></form>; }`;
export const profileHookFormCode = `import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({ name: z.string().min(2), role: z.string().min(1), experience: z.enum(["junior", "mid", "senior"]) });
// Use Controller for Radix Select and RadioGroup, and register for native inputs.`;
export const preferencesFormCode = example(`<Form><FormField name="workspace"><FormLabel>Workspace name</FormLabel><FormControl defaultValue="Joy UI" /></FormField><FormLabel>Theme</FormLabel><Select><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="system">System</SelectItem><SelectItem value="dark">Dark</SelectItem></SelectContent></Select><FormSubmit>Save preferences</FormSubmit></Form>`);
export const inviteHookFormCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";

const schema = z.object({ email: z.string().email(), access: z.enum(["viewer", "editor"]) });
// React Hook Form handles submission while Input displays schema errors.`;
export const contactHookFormCode = `import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const schema = z.object({ name: z.string().min(2), email: z.string().email(), message: z.string().min(20) });
// Register each control and pass errors directly to Joy UI components.`;
