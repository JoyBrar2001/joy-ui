"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Lock, Mail } from "lucide-react";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

type FormValues = {
  email: string;
  password: string;
};

export function SignInDialogWithRTK() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = useForm<FormValues>({
    defaultValues: { email: "", password: "" },
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
        <Button>Sign In</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <Input
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            rightInlineIcon={<Mail size={20} />}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <Input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="Password"
            rightInlineIcon={<Lock size={20} />}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <DialogFooter className="flex gap-2">
            <DialogClose>
              <Button disabled={loading}>Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
