import { Switch, SwitchThumb } from "@/components/ui/Switch";

export function SwitchSmall(){
  return (
    <Switch className="h-5 w-8">
      <SwitchThumb className="size-4 data-[state=checked]:translate-x-[14px]" />
    </Switch>
  );
}