import { Textarea } from "@/components/ui/Textarea";

export function DisabledTextarea() {
  return (
    <Textarea
      id="disabled-message"
      label="Message"
      defaultValue="This message cannot be edited."
      disabled
    />
  );
}
