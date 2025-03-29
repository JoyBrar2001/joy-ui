import { Button } from "@/components/ui/Button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { Separator } from "@/components/ui/Separator";
import { ChartArea, ChevronDown, ChevronUp, Facebook, Github, HelpCircle, LogOut, Settings, User } from "lucide-react";

export function MenuPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" rightIcon={
          <div className="flex flex-col">
            <ChevronUp size={20} />
            <ChevronDown size={20} className="-mt-2" />
          </div>
        }>
          <div className="flex flex-col items-start">
            John Doe
            <span className="text-xs text-neutral-600">johndoe@mail.com</span>
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-44 bg-neutral-950">
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <User className="size-4" />
          Profile
        </Button>
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <ChartArea className="size-4" />
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <Settings className="size-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <HelpCircle className="size-4" />
          Support
        </Button>

        <Separator orientation="horizontal" className="my-1" />

        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <Github className="size-4" />
          Github
        </Button>
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <Facebook className="size-4" />
          Facebook
        </Button>
        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <HelpCircle className="size-4" />
          Support
        </Button>

        <Separator orientation="horizontal" className="my-1" />

        <Button variant="ghost" className="w-full flex justify-start gap-2 text-white py-1.5 hover:bg-neutral-800">
          <LogOut className="size-4" />
          Logout
        </Button>
      </PopoverContent>
    </Popover>
  );
}