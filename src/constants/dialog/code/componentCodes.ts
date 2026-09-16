const dialogExample = (body: string) => `import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        ${body}
      </DialogContent>
    </Dialog>
  );
}`;

export const simpleDialogCode = dialogExample(`<DialogHeader>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogDescription>Are you sure you want to continue?</DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>`);

export const controlledDialogCode = `"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/Dialog";

export function ControlledDialog() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open controlled dialog</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>Confirm action</DialogTitle></DialogHeader>
          <DialogFooter><Button onClick={() => setOpen(false)}>Done</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}`;

export const customStyledDialogCode = dialogExample(`<DialogHeader>
          <DialogTitle>Blue themed dialog</DialogTitle>
          <DialogDescription>Customize DialogContent with your own classes.</DialogDescription>
        </DialogHeader>
        <DialogFooter><DialogClose asChild><Button>Close</Button></DialogClose></DialogFooter>`
).replace("<DialogContent>", "<DialogContent className=\"bg-sky-500 text-white\">");

export const stickyHeaderDialogCode = dialogExample(`<DialogHeader className="sticky top-0 z-10 bg-white py-4 shadow dark:bg-neutral-950">
          <DialogTitle>Sticky header</DialogTitle>
        </DialogHeader>
        <DialogDescription>Long content can scroll while the header remains visible.</DialogDescription>
        <div className="space-y-3 py-4">{Array.from({ length: 8 }, (_, index) => <p key={index}>Dialog content section {index + 1}</p>)}</div>
        <DialogFooter><DialogClose asChild><Button>Close</Button></DialogClose></DialogFooter>`);

export const termsDialogCode = `"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";

export function TermsDialog() {
  const [agreed, setAgreed] = useState(false);
  return (
    <Dialog>
      <DialogTrigger asChild><Button>Open terms</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader><DialogTitle>Terms & conditions</DialogTitle></DialogHeader>
        <DialogDescription className="h-[300px] overflow-y-auto">Please review the terms before accepting.</DialogDescription>
        <label className="flex gap-2"><input type="checkbox" checked={agreed} onChange={(event) => setAgreed(event.target.checked)} /> I agree</label>
        <DialogFooter><DialogClose asChild><Button disabled={!agreed}>Accept</Button></DialogClose></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

export const signInDialogCode = `"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";

export function SignInDialog() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild><Button>Sign in</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader><DialogTitle>Sign in</DialogTitle></DialogHeader>
        <div className="space-y-4"><Input label="Email" type="email" /><Input label="Password" type="password" /></div>
        <DialogFooter><Button onClick={() => setOpen(false)}>Sign in</Button></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`;

export const signInDialogWithRtkCode = `"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";

type SignInValues = { email: string; password: string };

export function SignInDialogWithRTK() {
  const { register, handleSubmit } = useForm<SignInValues>();
  return <Dialog><DialogTrigger asChild><Button>Sign in</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Sign in</DialogTitle></DialogHeader><form className="space-y-4" onSubmit={handleSubmit(console.log)}><Input label="Email" {...register("email")} /><Input label="Password" type="password" {...register("password")} /><DialogFooter><Button type="submit">Sign in</Button></DialogFooter></form></DialogContent></Dialog>;
}`;

export const signInDialogWithRtkAndZodCode = `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";

const schema = z.object({ email: z.string().email(), password: z.string().min(6) });
type SignInValues = z.infer<typeof schema>;

export function SignInDialogWithRTKAndZod() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInValues>({ resolver: zodResolver(schema), mode: "onBlur" });
  return <Dialog><DialogTrigger asChild><Button>Sign in</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Sign in</DialogTitle></DialogHeader><form className="space-y-4" onSubmit={handleSubmit(console.log)}><Input label="Email" error={errors.email?.message} {...register("email")} /><Input label="Password" type="password" error={errors.password?.message} {...register("password")} /><DialogFooter><Button type="submit">Sign in</Button></DialogFooter></form></DialogContent></Dialog>;
}`;

export const signUpDialogCode = `"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/Dialog";
import { Input } from "@/components/ui/Input";

const schema = z.object({ name: z.string().min(2), email: z.string().email(), password: z.string().min(8) });
type SignUpValues = z.infer<typeof schema>;

export function SignUpDialog() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignUpValues>({ resolver: zodResolver(schema) });
  return <Dialog><DialogTrigger asChild><Button>Sign up</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Create an account</DialogTitle></DialogHeader><form className="space-y-4" onSubmit={handleSubmit(console.log)}><Input label="Name" error={errors.name?.message} {...register("name")} /><Input label="Email" error={errors.email?.message} {...register("email")} /><Input label="Password" type="password" error={errors.password?.message} {...register("password")} /><Button type="submit">Create account</Button></form></DialogContent></Dialog>;
}`;
