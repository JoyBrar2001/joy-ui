import { Button } from "@/components/ui/Button";

export function CustomVariantButton() {
  return (
    <Button
      variant="custom"
      className="text-black bg-green-200 hover:scale-105 active:scale-95"
      rightIcon={
        <div className="relative">
          <div className="bg-green-500 size-4 rounded-full animate-ping" />
          <div className="absolute top-1/2 left-1/2 -translate-1/2 bg-green-500 size-2 rounded-full" />
        </div>
      }
    >
      Online
    </Button>
  );
}
