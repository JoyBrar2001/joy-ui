"use client";

import {
  Bell,
  Check,
  MoreHorizontal,
  Package,
  ShieldCheck,
  Star,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

export function BasicCard() {
  return (
    <Card className="w-full max-w-md">
      <CardContent>
        <CardTitle>Keep things simple</CardTitle>
        <CardDescription className="mt-2">
          A card can be as small as a single piece of content.
        </CardDescription>
      </CardContent>
    </Card>
  );
}
export function CardWithHeader() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Project details</CardTitle>
        <CardDescription>
          Everything you need to know about this project.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Joy UI is a collection of reusable interface patterns built for the
          web.
        </p>
      </CardContent>
    </Card>
  );
}
export function CardWithFooter() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Delete workspace?</CardTitle>
        <CardDescription>This action cannot be undone.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          All projects and members will be removed permanently.
        </p>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost">Cancel</Button>
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
}
export function CardWithAction() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pr-16">
        <CardTitle>Team members</CardTitle>
        <CardDescription>People with access to this workspace.</CardDescription>
        <CardAction>
          <Button
            variant="ghost"
            className="size-8 px-0"
            aria-label="More team member actions"
          >
            <MoreHorizontal className="size-4" />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex -space-x-2">
          <span className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-xs text-white dark:border-neutral-950">
            <User className="size-4" />
          </span>
          <span className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-neutral-500 text-xs text-white dark:border-neutral-950">
            AB
          </span>
          <span className="flex size-8 items-center justify-center rounded-full border-2 border-white bg-neutral-300 text-xs text-black dark:border-neutral-950">
            +4
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
export function ProfileCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
            <User className="size-5" />
          </div>
          <div>
            <CardTitle>Alex Morgan</CardTitle>
            <CardDescription>Product designer</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          Designing calm, useful experiences for teams that care about the
          details.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-xs text-neutral-500">Joined March 2025</span>
        <Button variant="outline">View profile</Button>
      </CardFooter>
    </Card>
  );
}
export function StatsCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardDescription>Monthly revenue</CardDescription>
        <CardTitle className="text-3xl">$24,680</CardTitle>
        <CardAction>
          <span className="rounded-full bg-neutral-100 px-2 py-1 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
            +18.2%
          </span>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex h-16 items-end gap-1">
          {[30, 44, 38, 60, 52, 70, 66, 88, 76, 96].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-t-sm bg-neutral-900 dark:bg-white"
              style={{ height: `${height}%`, opacity: 0.3 + index / 16 }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
export function PricingCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Pro plan</CardTitle>
        <CardDescription>
          For growing teams shipping every week.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-semibold">
          $24
          <span className="text-sm font-normal text-neutral-500"> / month</span>
        </p>
        <ul className="mt-5 space-y-3 text-sm">
          <li className="flex gap-2">
            <Check className="size-4" />
            Unlimited projects
          </li>
          <li className="flex gap-2">
            <Check className="size-4" />
            Priority support
          </li>
          <li className="flex gap-2">
            <Check className="size-4" />
            Team analytics
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Start free trial</Button>
      </CardFooter>
    </Card>
  );
}
export function NotificationCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pr-12">
        <div className="flex gap-3">
          <Bell className="mt-0.5 size-5" />
          <div>
            <CardTitle>New comment</CardTitle>
            <CardDescription>
              Sarah left feedback on your dashboard.
            </CardDescription>
          </div>
        </div>
        <CardAction>
          <button
            type="button"
            className="text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            aria-label="Dismiss notification"
          >
            ×
          </button>
        </CardAction>
      </CardHeader>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost">Dismiss</Button>
        <Button variant="outline">Open comment</Button>
      </CardFooter>
    </Card>
  );
}
export function MediaCard() {
  return (
    <Card className="w-full max-w-md overflow-hidden">
      <div className="flex h-28 items-center justify-center bg-neutral-900 text-white dark:bg-neutral-800">
        <Package className="size-10 text-neutral-400" />
      </div>
      <CardHeader>
        <CardTitle>Design system essentials</CardTitle>
        <CardDescription>12 min read · Product design</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          A practical guide to building a flexible system that can grow with
          your product.
        </p>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="flex items-center gap-1 text-xs text-neutral-500">
          <Star className="size-3 fill-current" /> 4.9 rating
        </span>
        <Button variant="ghost">Read article</Button>
      </CardFooter>
    </Card>
  );
}
export function SettingsCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>
          Manage how your account stays protected.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="size-5" />
            <div>
              <p className="text-sm font-medium">Two-factor authentication</p>
              <p className="text-xs text-neutral-500">
                Enabled for your account
              </p>
            </div>
          </div>
          <span className="text-xs font-medium text-neutral-500">On</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Manage security</Button>
      </CardFooter>
    </Card>
  );
}
export function ProductCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Wireless headphones</CardTitle>
        <CardDescription>Studio quality · Matte black</CardDescription>
        <CardAction>
          <span className="text-lg font-semibold">$129</span>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg bg-neutral-100 p-5 text-center dark:bg-neutral-900">
          <Package className="mx-auto size-12 text-neutral-500" />
          <p className="mt-2 text-xs text-neutral-500">
            In stock · Ships tomorrow
          </p>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-xs text-neutral-500">Free shipping</span>
        <Button>Add to cart</Button>
      </CardFooter>
    </Card>
  );
}
