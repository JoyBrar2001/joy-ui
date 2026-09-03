export const simpleTextareaCode = `import { Textarea } from "@/components/ui/Textarea";

export function SimpleTextarea() {
  return <Textarea id="message" label="Message" placeholder="Write your message..." />;
}`;

export const textareaWithDescriptionCode = `import { Textarea } from "@/components/ui/Textarea";

export function TextareaWithDescription() {
  return (
    <Textarea
      id="bio"
      label="Bio"
      placeholder="Tell us a little about yourself..."
      description="Keep your bio short and useful."
    />
  );
}`;

export const disabledTextareaCode = `import { Textarea } from "@/components/ui/Textarea";

export function DisabledTextarea() {
  return (
    <Textarea
      id="disabled-message"
      label="Message"
      defaultValue="This message cannot be edited."
      disabled
    />
  );
}`;

export const errorTextareaCode = `import { Textarea } from "@/components/ui/Textarea";

export function ErrorTextarea() {
  return (
    <Textarea
      id="feedback"
      label="Feedback"
      placeholder="Share your feedback..."
      error="Please provide at least 20 characters."
    />
  );
}`;

export const textareaWithCharacterCountCode = `"use client";

import { useState } from "react";
import { Textarea } from "@/components/ui/Textarea";

const MAX_LENGTH = 160;

export function TextareaWithCharacterCount() {
  const [value, setValue] = useState("");

  return (
    <div className="w-full">
      <Textarea
        id="post"
        label="Post"
        value={value}
        maxLength={MAX_LENGTH}
        onChange={(event) => setValue(event.target.value)}
        placeholder="What is on your mind?"
      />
      <p className="mt-1 text-right text-xs text-neutral-500">
        {value.length}/{MAX_LENGTH}
      </p>
    </div>
  );
}`;
