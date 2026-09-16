import {
  ButtonHTMLAttributes,
  createContext,
  forwardRef,
  useContext,
  useState,
} from "react";
import { cn } from "@/utils";

type ToggleVariant = "default" | "outline" | "ghost";

export type ToggleProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  variant?: ToggleVariant;
};

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      className,
      pressed,
      defaultPressed = false,
      onPressedChange,
      variant = "default",
      onClick,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledPressed, setUncontrolledPressed] =
      useState(defaultPressed);
    const isPressed = pressed ?? uncontrolledPressed;

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={isPressed}
        data-state={isPressed ? "on" : "off"}
        disabled={disabled}
        className={cn(
          "inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 disabled:pointer-events-none disabled:opacity-50",
          variant === "default" &&
            "bg-transparent hover:bg-neutral-100 data-[state=on]:bg-neutral-900 data-[state=on]:text-white dark:hover:bg-neutral-800 dark:data-[state=on]:bg-white dark:data-[state=on]:text-black",
          variant === "outline" &&
            "border border-neutral-300 hover:bg-neutral-100 data-[state=on]:border-neutral-900 data-[state=on]:bg-neutral-900 data-[state=on]:text-white dark:border-neutral-700 dark:hover:bg-neutral-800 dark:data-[state=on]:border-white dark:data-[state=on]:bg-white dark:data-[state=on]:text-black",
          variant === "ghost" &&
            "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-950 data-[state=on]:text-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-white dark:data-[state=on]:text-white",
          className,
        )}
        onClick={(event) => {
          const nextPressed = !isPressed;
          if (pressed === undefined) setUncontrolledPressed(nextPressed);
          onPressedChange?.(nextPressed);
          onClick?.(event);
        }}
        {...props}
      />
    );
  },
);
Toggle.displayName = "Toggle";

type ToggleGroupContextValue = {
  type: "single" | "multiple";
  value: string | string[];
  toggle: (item: string) => void;
};
const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null);

export type ToggleGroupProps = Omit<
  React.ComponentPropsWithoutRef<"div">,
  "onChange"
> & {
  type?: "single" | "multiple";
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
};

export function ToggleGroup({
  className,
  type = "single",
  value,
  defaultValue = type === "multiple" ? [] : "",
  onValueChange,
  children,
  ...props
}: ToggleGroupProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState<string | string[]>(
    defaultValue,
  );
  const currentValue = value ?? uncontrolledValue;
  const toggle = (item: string) => {
    const nextValue =
      type === "multiple"
        ? Array.isArray(currentValue)
          ? currentValue.includes(item)
            ? currentValue.filter((valueItem) => valueItem !== item)
            : [...currentValue, item]
          : [item]
        : currentValue === item
          ? ""
          : item;
    if (value === undefined) setUncontrolledValue(nextValue);
    onValueChange?.(nextValue);
  };
  return (
    <ToggleGroupContext.Provider value={{ type, value: currentValue, toggle }}>
      <div
        ref={undefined}
        role="group"
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        {children}
      </div>
    </ToggleGroupContext.Provider>
  );
}

export const ToggleGroupItem = forwardRef<
  HTMLButtonElement,
  ToggleProps & { value: string }
>(({ value: itemValue, onPressedChange, ...props }, ref) => {
  const context = useContext(ToggleGroupContext);
  if (!context) return <Toggle ref={ref} {...props} />;
  const isPressed = Array.isArray(context.value)
    ? context.value.includes(itemValue)
    : context.value === itemValue;
  return (
    <Toggle
      ref={ref}
      {...props}
      pressed={isPressed}
      onPressedChange={() => {
        context.toggle(itemValue);
        onPressedChange?.(!isPressed);
      }}
    />
  );
});
ToggleGroupItem.displayName = "ToggleGroupItem";
