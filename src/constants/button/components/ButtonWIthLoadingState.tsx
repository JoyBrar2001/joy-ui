import { Button } from "@/components/ui/Button";

export function ButtonWithLoadingState() {
  return (
    <Button variant="primary" isLoading={true}>
      Send
    </Button>
  );
}
