import { Button } from "@/components/ui/Button";

export function DisabledWhileLoadingButton() {
  return (
    <Button variant="primary" isLoading={true} disabled={true}>
      Send
    </Button>
  );
}
