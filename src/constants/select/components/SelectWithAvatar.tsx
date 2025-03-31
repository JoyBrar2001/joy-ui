import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectViewport } from "@/components/ui/Select";

export function SelectWithAvatar() {
  return (
    <Select defaultValue="joy">
      <SelectTrigger className="w-[200px] h-12">
        <SelectValue placeholder="Select Theme" />
      </SelectTrigger>

      <SelectContent className="w-[200px] py-2">
        <SelectViewport className="py-0">
          <SelectItem value="joy" className="h-10 not-first:mt-2">
            <div className="flex items-center gap-2">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  className="size-8"
                  src="https://avatars.githubusercontent.com/u/194884352?v=4"
                  alt="@radix_ui"
                />
                <AvatarFallback className="size-8">JB</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-left">
                <h2 className="text-sm font-semibold">Joy Brar</h2>
                <p className="-mt-1 text-xs text-neutral-400">@joybrar2001</p>
              </div>
            </div>
          </SelectItem>
          <SelectItem value="john" className="h-10 not-first:mt-2">
            <div className="flex items-center gap-2">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  className="size-8"
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="@radix_ui"
                />
                <AvatarFallback className="size-8">JD</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-left">
                <h2 className="text-sm font-semibold">John Doe</h2>
                <p className="-mt-1 text-xs text-neutral-400">@johndoe1234</p>
              </div>
            </div>
          </SelectItem>
          <SelectItem value="sofie" className="h-10 not-first:mt-2">
            <div className="flex items-center gap-2">
              <Avatar className="cursor-pointer">
                <AvatarImage
                  className="size-8"
                  src="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="@radix_ui"
                />
                <AvatarFallback className="size-8">SS</AvatarFallback>
              </Avatar>

              <div className="flex flex-col text-left">
                <h2 className="text-sm font-semibold">Sofie S.</h2>
                <p className="-mt-1 text-xs text-neutral-400">@sofiesss</p>
              </div>
            </div>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </Select>
  );
}