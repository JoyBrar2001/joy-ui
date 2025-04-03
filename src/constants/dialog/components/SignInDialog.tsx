"use client";

import { useState } from "react";
import { Lock, Mail } from "lucide-react";

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function SignInDialog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<{ email: string, password: string }>({ email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async () => {
    setLoading(true);

    await new Promise((res) => (
      setTimeout(() => {
        console.log("Form Data:", formData);
        setLoading(false);
        res(1);
      }, 2000)
    ));

    setIsOpen(false);
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

        <form className="flex flex-col gap-3">
          <Input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            rightInlineIcon={<Mail size={20} />}
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            rightInlineIcon={<Lock size={20} />}
          />
        </form>

        <DialogFooter className="flex gap-2">
          <DialogClose>
            <Button disabled={loading}>Cancel</Button>
          </DialogClose>
          <Button onClick={handleSignIn} disabled={loading}>
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
