"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarIcon, Lock, Mail, User } from "lucide-react";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Calendar } from "@/components/ui/Calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/Popover";
import { cn } from "@/utils";
import { format } from "date-fns";
import { FaGithub, FaGoogle } from "react-icons/fa";

const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  dob: z.date(),
  gender: z.enum(["male", "female", "other"], { required_error: "Gender is required" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof signUpSchema>;

export function SignUpDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: undefined,
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur"
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);

    await new Promise((res) => setTimeout(res, 2000));

    console.log("Form Data:", data);
    setLoading(false);
    setIsOpen(false);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <Button>Sign Up</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create an Account</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex gap-2">
            <div className="flex flex-col">
              <Input
                {...register("firstName")}
                placeholder="First Name"
                rightInlineIcon={<User size={20} />}
                className={errors.firstName && "border border-red-500"}
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
            </div>
            <div className="flex flex-col">
              <Input
                {...register("lastName")}
                placeholder="Last Name"
                rightInlineIcon={<User size={20} />}
                className={errors.lastName && "border border-red-500"}
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
            </div>
          </div>

          <div>
            <Input
              {...register("email")}
              placeholder="Email"
              rightInlineIcon={<Mail size={20} />}
              className={errors.email && "border border-red-500"}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>

            <Popover>
              <PopoverTrigger>
                <Button
                  variant="custom"
                  className={cn(
                    "border border-neutral-600 w-48 justify-between hover:bg-neutral-800",
                    errors.dob && "border border-red-500",
                    watch("dob") === undefined ? "text-neutral-500" : "text-white"
                  )}
                >
                  {watch("dob") ? format(watch("dob"), "dd/MM/yyyy") : "Select Dob"}
                  <CalendarIcon size={18} className="text-white" />
                </Button>
              </PopoverTrigger>

              <PopoverContent>
                <Calendar
                  enableDropdown
                  mode="single"
                  selected={watch("dob")}
                  month={watch("dob")}
                  onSelect={(date) => setValue("dob", date as Date)}
                />
              </PopoverContent>
            </Popover>
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
          </div>

          <div>
            <RadioGroup
              onValueChange={(value) => setValue("gender", value as "male" | "female" | "other")}
              className="flex items-center gap-4"
            >
              <span className="flex gap-2 items-center">
                <RadioGroupItem value="male" /> Male
              </span>
              <span className="flex gap-2 items-center">
                <RadioGroupItem value="female" /> Female
              </span>
              <span className="flex gap-2 items-center">
                <RadioGroupItem value="other" /> Other
              </span>
            </RadioGroup>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
          </div>

          <div>
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
              rightInlineIcon={<Lock size={20} />}
              className={errors.password && "border border-red-500"}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <div>
            <Input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              rightInlineIcon={<Lock size={20} />}
              className={errors.confirmPassword && "border border-red-500"}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          <DialogFooter className="flex flex-col gap-2">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>

            <div className="w-full my-2 flex gap-3 items-center">
              <div className="bg-neutral-800 h-[1px] w-full" />
              <span>or</span>
              <div className="bg-neutral-800 h-[1px] w-full" />
            </div>

            <Button className="px-12" variant="outline" leftIcon={<FaGoogle className="size-4" />}>
              Login with Google
            </Button>
            <Button className="px-12" variant="outline" leftIcon={<FaGithub className="size-4" />}>
              Login with Github
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
