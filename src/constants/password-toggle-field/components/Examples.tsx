"use client";

import { useMemo, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";
import { Input } from "@/components/ui/Input";

type PasswordInputProps = { label?: string; value?: string; defaultValue?: string; placeholder?: string; error?: string; autoComplete?: "current-password" | "new-password"; onChange?: (value: string) => void };

function PasswordInput({ label, value, defaultValue, placeholder = "Enter password", error, autoComplete = "current-password", onChange }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);
  return <Input label={label} value={value} defaultValue={defaultValue} onChange={(event) => onChange?.(event.target.value)} type={visible ? "text" : "password"} placeholder={placeholder} autoComplete={autoComplete} error={error} rightInlineIcon={<button type="button" aria-label={visible ? "Hide password" : "Show password"} onClick={() => setVisible((current) => !current)} className="rounded p-1 text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:hover:text-white">{visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button>} />;
}

const passwordPairSchema = z.object({ password: z.string(), confirmPassword: z.string() }).superRefine(({ password, confirmPassword }, context) => {
  if (confirmPassword.length > 0 && password !== confirmPassword) context.addIssue({ code: "custom", path: ["confirmPassword"], message: "Passwords do not match." });
});

const strengthRules = [
  { label: "8+ characters", schema: z.string().min(8) },
  { label: "Uppercase letter", schema: z.string().regex(/[A-Z]/) },
  { label: "Number", schema: z.string().regex(/[0-9]/) },
  { label: "Special character", schema: z.string().regex(/[^A-Za-z0-9]/) },
];

export function BasicPassword() { return <div className="w-full max-w-sm"><PasswordInput label="Password" defaultValue="secret-password" /></div>; }
export function NewPassword() { return <div className="w-full max-w-sm"><PasswordInput label="New password" placeholder="Create a password" autoComplete="new-password" /></div>; }
export function PasswordWithStrength() {
  const [password, setPassword] = useState("");
  const completedRules = useMemo(() => strengthRules.map(({ schema }) => schema.safeParse(password).success), [password]);
  const completedCount = completedRules.filter(Boolean).length;
  return <div className="w-full max-w-sm"><PasswordInput label="Password" value={password} onChange={setPassword} placeholder="Enter a strong password" autoComplete="new-password" /><div className="mt-3 flex gap-1" aria-label={`${completedCount} of ${strengthRules.length} password requirements met`}>{completedRules.map((complete, index) => <span key={strengthRules[index].label} className={`h-1.5 flex-1 rounded transition-colors ${complete ? "bg-emerald-500" : "bg-neutral-200 dark:bg-neutral-800"}`} />)}</div><ul className="mt-3 grid gap-1 text-xs">{strengthRules.map(({ label }, index) => <li key={label} className={completedRules[index] ? "text-emerald-600 dark:text-emerald-400" : "text-neutral-500"}>{completedRules[index] ? "✓" : "○"} {label}</li>)}</ul></div>;
}
export function ConfirmPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const validation = passwordPairSchema.safeParse({ password, confirmPassword });
  const passwordsMatch = confirmPassword.length > 0 && validation.success;
  const error = confirmPassword.length > 0 && !validation.success ? "Passwords do not match." : undefined;
  return <div className="grid w-full max-w-sm gap-3"><PasswordInput label="New password" value={password} onChange={setPassword} placeholder="New password" autoComplete="new-password" /><PasswordInput label="Confirm password" value={confirmPassword} onChange={setConfirmPassword} placeholder="Confirm password" autoComplete="new-password" error={error} /><p className={`text-sm ${passwordsMatch ? "text-emerald-600 dark:text-emerald-400" : "text-neutral-500"}`}>{confirmPassword.length === 0 ? "Re-enter your password to confirm it." : passwordsMatch ? "Passwords match." : "Passwords must match."}</p></div>;
}
export function PasswordWithHint() { return <div className="w-full max-w-sm"><PasswordInput label="Account password" placeholder="Your account password" /><p className="mt-2 text-xs text-neutral-500">Use at least 8 characters with a number.</p></div>; }
export function ControlledPassword() { const [visible, setVisible] = useState(false); return <div className="w-full max-w-sm"><Input label="Controlled password" type={visible ? "text" : "password"} placeholder="Controlled visibility" rightInlineIcon={<button type="button" aria-label={visible ? "Hide password" : "Show password"} onClick={() => setVisible((current) => !current)} className="rounded p-1 text-neutral-500 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:hover:text-white">{visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button>} /><p className="mt-2 text-xs text-neutral-500">Visibility: {visible ? "shown" : "hidden"}</p></div>; }
