import { Alert } from "@/components/ui/Alert";

export function SuccessWithButton() {
  return (
    <Alert label="Download Complete!" variant="success" buttonText="Open File" colored />
  );
}