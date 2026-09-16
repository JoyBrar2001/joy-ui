"use client";

import { useState } from "react";
import {
  OneTimePasswordField,
  OneTimePasswordHiddenInput,
  OneTimePasswordInput,
} from "@/components/ui/OneTimePasswordField";

function Otp({
  length = 6,
  ...props
}: {
  length?: number;
  type?: "text" | "password";
  validationType?: "numeric" | "alpha" | "alphanumeric" | "none";
  disabled?: boolean;
  defaultValue?: string;
  onAutoSubmit?: (value: string) => void;
}) {
  return (
    <OneTimePasswordField
      {...props}
      aria-label={`${length}-character verification code`}
      className="flex gap-2"
    >
      <>
        {Array.from({ length }, (_, index) => (
          <OneTimePasswordInput key={index} index={index} />
        ))}
      </>
      <OneTimePasswordHiddenInput />
    </OneTimePasswordField>
  );
}
export function BasicOtp() {
  return <Otp />;
}
export function SixDigitOtp() {
  return <Otp defaultValue="123" />;
}
export function AlphanumericOtp() {
  return <Otp validationType="alphanumeric" type="text" />;
}
export function SegmentedOtp() {
  return <Otp length={4} type="password" />;
}
export function OtpWithAutoSubmit() {
  const [status, setStatus] = useState("Waiting for code");
  return (
    <div className="grid gap-3">
      <Otp onAutoSubmit={(value) => setStatus(`Submitted: ${value}`)} />
      <span className="text-xs text-neutral-500">{status}</span>
    </div>
  );
}
export function DisabledOtp() {
  return <Otp disabled defaultValue="123456" />;
}
