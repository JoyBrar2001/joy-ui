import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card";
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { User, X } from "lucide-react";

export function ProfileCardPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" className="p-2">
          <User className="size-5" />
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <Card className="rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-neutral-800 dark:to-neutral-900 shadow-lg">
          <CardHeader className="relative flex items-center justify-between pb-2">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjBmYWNlc3xlbnwwfHwwfHx8MA%3D%3D" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg font-semibold">John Doe</CardTitle>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Software Engineer</p>
              </div>
            </div>
            <PopoverClose className="absolute top-2 right-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 transition">
              <X className="size-5" />
            </PopoverClose>
          </CardHeader>

          <CardContent className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Passionate about building scalable web applications and intuitive user experiences.
          </CardContent>

          <CardFooter className="flex justify-center gap-2 pt-3">
            <Button variant="outline" className="text-sm whitespace-nowrap flex-1">View Profile</Button>
            <Button variant="primary" className="text-sm whitespace-nowrap flex-1">Logout</Button>
          </CardFooter>
        </Card>
      </PopoverContent>
    </Popover>
  );
}