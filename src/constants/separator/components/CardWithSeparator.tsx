import { Card, CardContent } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";

export function CardWithSeparator() {
  return (
    <Card className="w-full p-4">
      <CardContent>
        <p className="text-sm">This is a card with a separator.</p>
        <Separator orientation="horizontal" className="my-2" />
        <p className="text-sm">Separated content.</p>
      </CardContent>
    </Card>
  );
}