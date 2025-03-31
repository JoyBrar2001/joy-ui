import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Grapes", value: "grapes" },
];

export default function MultiSelect() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const [open, setOpen] = useState(false); // Control dropdown manually

  const handleSelect = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const removeSelected = (value: string) => {
    setSelectedValues((prev) => prev.filter((v) => v !== value));
  };

  return (
    <div className="relative w-64 space-y-2">
      {/* Custom Trigger */}
      <button
        className="flex items-center justify-between w-full px-3 py-2 border rounded-md bg-neutral-800"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-wrap gap-1">
          {selectedValues.length > 0 ? (
            selectedValues.map((value) => (
              <span
                key={value}
                className="flex items-center gap-1 px-2 py-1 text-sm bg-neutral-700 rounded-md"
              >
                {options.find((o) => o.value === value)?.label}
                <X
                  size={14}
                  className="cursor-pointer hover:text-red-500"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent dropdown from opening
                    removeSelected(value);
                  }}
                />
              </span>
            ))
          ) : (
            <span className="text-gray-400">Select options</span>
          )}
        </div>
        <ChevronDown size={16} />
      </button>

      {/* Custom Dropdown */}
      {open && (
        <div className="absolute left-0 w-full mt-2 bg-neutral-800 border rounded-md shadow-md">
          {options.map((option) => (
            <div
              key={option.value}
              className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-gray-700"
              onClick={() => handleSelect(option.value)}
            >
              <span>{option.label}</span>
              {selectedValues.includes(option.value) && <Check size={16} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
