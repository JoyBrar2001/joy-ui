export const alertComponentCode = `import { Alert } from "@/components/ui/Alert";

export function AlertComponent() {
  return (
    <Alert label="Something went wrong!" variant="alert" />
  );
}`;

export const alertColoredCode = `import { Alert } from "@/components/ui/Alert";

export function AlertColored() {
  return (
    <Alert label="Something went wrong!" variant="alert" colored />
  );
}`;

export const alertWithButtonAndLinkCode = `import { Alert } from "@/components/ui/Alert";

export function AlertWithButtonAndLink() {
  return (
    <Alert label="Security Risk Detected!" variant="alert" buttonText="Resolve Issue" link="/components/ui/alert" colored />
  );
}`;

export const infoCode = `import { Alert } from "@/components/ui/Alert";

export function Info() {
  return (
    <Alert label="Completed Successfully!" variant="info" />
  );
}`;

export const infoColoredCode = `import { Alert } from "@/components/ui/Alert";

export function InfoColored() {
  return (
    <Alert label="Completed Successfully!" variant="info" colored />
  );
}`;

export const infoWithButtonCode = `import { Alert } from "@/components/ui/Alert";

export function InfoWithButton() {
  return (
    <Alert label="Update Available!" variant="info" buttonText="Update Now" colored />
  );
}`;

export const successCode = `import { Alert } from "@/components/ui/Alert";

export function Success() {
  return (
    <Alert label="Completed Successfully!" variant="success" />
  );
}`;

export const successColoredCode = `import { Alert } from "@/components/ui/Alert";

export function SuccessColored() {
  return (
    <Alert label="Completed Successfully!" variant="success" colored />
  );
}`;

export const successWithButtonCode = `import { Alert } from "@/components/ui/Alert";

export function SuccessWithButton() {
  return (
    <Alert label="Download Complete!" variant="success" buttonText="Open File" colored />
  );
}`;

export const warningCode = `import { Alert } from "@/components/ui/Alert";

export function Warning() {
  return (
    <Alert label="Check your input!" variant="warning" />
  );
}`;

export const warningColoredCode = `import { Alert } from "@/components/ui/Alert";

export function WarningColored() {
  return (
    <Alert label="Check your input!" variant="warning" colored />
  );
}`;

export const warningWithButtonAndLinkCode = `import { Alert } from "@/components/ui/Alert";

export function WarningWithButtonAndLink() {
  return (
    <Alert label="Storage Almost Full!" variant="warning" buttonText="Manage Storage" link="/components/ui/alert" colored />
  );
}`;
