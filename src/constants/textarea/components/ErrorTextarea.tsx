import { Textarea } from "@/components/ui/Textarea";

export function ErrorTextarea() {
  return (
    <Textarea
      id="feedback"
      label="Feedback"
      placeholder="Share your feedback..."
      error="Please provide at least 20 characters."
    />
  );
}
