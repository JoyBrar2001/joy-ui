import { Textarea } from "@/components/ui/Textarea";

export function TextareaWithDescription() {
  return (
    <Textarea
      id="bio"
      label="Bio"
      placeholder="Tell us a little about yourself..."
      description="Keep your bio short and useful."
    />
  );
}
