import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/HoverCard";

export function ProfileHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" alt="@radix_ui" />
          <AvatarFallback>JB</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>

      <HoverCardContent className="p-0 w-80">
        <Card className="rounded-lg bg-white dark:bg-neutral-900 shadow-lg border-none">
          <CardHeader className="flex gap-2 pb-2">
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://avatars.githubusercontent.com/u/194884352?v=4" alt="@radix_ui" />
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <CardTitle className="text-lg font-semibold">Joy Brar</CardTitle>
              <CardDescription className="-mt-1">@joybrar2001</CardDescription>
            </div>
          </CardHeader>

          <CardContent className="text-sm text-neutral-600 dark:text-neutral-300">
            <p className="text-neutral-500 dark:text-neutral-400">
              Full stack developer, mind behind Joy UI (obviously), and proficient in Next js. React, Typescript...
            </p>
          </CardContent>

          <CardFooter className="flex justify-between border-t border-neutral-200 dark:border-neutral-700 p-3">
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold">500</p>
              <p className="text-xs text-neutral-500">Following</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold">2,900</p>
              <p className="text-xs text-neutral-500">Followers</p>
            </div>
            <Button variant="outline" className="text-sm">Follow</Button>
          </CardFooter>
        </Card>
      </HoverCardContent>
    </HoverCard>
  );
}