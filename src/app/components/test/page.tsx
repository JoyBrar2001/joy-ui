"use client";

import { Check, CheckCircle, Cross, Star } from "lucide-react";
import { Label } from "./Label";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

export default function Test() {
  return (
    <div className="max-w-[100rem] mx-auto h-full flex pt-24 bg-neutral-100 dark:bg-black">
      <section className="flex-1 p-6 min-h-screen h-full">
        <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
          Select Display Mode
        </h1>

        <form action="">
          {/* ✅ Basic RadioGroup with Custom Icons */}
          <RadioGroup defaultValue="checked">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unchecked" id="r1" icon={Check} />
              <Label htmlFor="r1">Unchecked</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="checked" id="r2" icon={Check} size="md" />
              <Label htmlFor="r2">Checked</Label>
            </div>
          </RadioGroup>

          {/* ✅ RadioGroup with Different Sizes */}
          <RadioGroup defaultValue="medium" className="mt-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="r3" size="sm" />
              <Label htmlFor="r3">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="r4" size="md" />
              <Label htmlFor="r4">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="r5" size="lg" />
              <Label htmlFor="r5">Large</Label>
            </div>
          </RadioGroup>

          {/* ✅ RadioGroup with Custom Icons */}
          <RadioGroup defaultValue="star" className="mt-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="check" id="r6" icon={Check} />
              <Label htmlFor="r6">Check</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="star" id="r7" icon={Star} />
              <Label htmlFor="r7">Star</Label>
            </div>
          </RadioGroup>

          {/* ✅ RadioGroup with Sublabel */}
          <RadioGroup defaultValue="performance" className="mt-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="battery" id="r8" />
                <div>
                  <Label htmlFor="r8">Battery Saver</Label>
                  <p className="text-sm text-gray-500">Extends battery life</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="performance" id="r9" />
                <div>
                  <Label htmlFor="r9">Performance Mode</Label>
                  <p className="text-sm text-gray-500">Higher power usage</p>
                </div>
              </div>
            </div>
          </RadioGroup>

          {/* ✅ RadioGroup with Description */}
          <RadioGroup defaultValue="personal" className="mt-4">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="personal" id="r10" />
                <div>
                  <Label htmlFor="r10">Personal</Label>
                  <p className="text-xs text-gray-400">For individual use</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="business" id="r11" />
                <div>
                  <Label htmlFor="r11">Business</Label>
                  <p className="text-xs text-gray-400">For business teams</p>
                </div>
              </div>
            </div>
          </RadioGroup>
        </form>

      </section>
    </div>
  );
}
