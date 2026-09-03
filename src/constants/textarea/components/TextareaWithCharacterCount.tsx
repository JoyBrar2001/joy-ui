"use client";

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
}
