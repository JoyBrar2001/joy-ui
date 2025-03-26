import { Button } from "@/components/ui/Button";
import { Send } from "lucide-react";

export function ButtonWithCustomAnimation() {
  return (
    <Button
      variant="primary"
      className="hover:scale-105 active:scale-95"
      rightIcon={
        <Send className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
      }
    >
      Send
    </Button>
  );
}
