import { Alert } from "@/components/ui/Alert";

export function AlertWithButtonAndLink() {
  return (
    <Alert label="Security Risk Detected!" variant="alert" buttonText="Resolve Issue" link="/components/ui/alert" colored />
  );
}