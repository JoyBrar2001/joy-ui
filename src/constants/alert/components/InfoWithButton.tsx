import { Alert } from "@/components/ui/Alert";

export function InfoWithButton() {
  return (
    <Alert label="Update Available!" variant="info" buttonText="Update Now" colored />
  );
}