import { Alert } from "@/components/ui/Alert";

export function WarningWithButtonAndLink() {
  return (
    <Alert label="Storage Almost Full!" variant="warning" buttonText="Manage Storage" link="/components/ui/alert" colored />
  );
}