import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";

import { Tag } from "@/lib/mock-data";

export default function TagsCombobox({ options, selectedOptions, setSelectedOptions }: {
  options: Tag[],
  selectedOptions: Tag[],
  setSelectedOptions: (options: Tag[]) => void
}) {

  const updateSelectedOptions = (option: Tag) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((t: Tag) => t !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {selectedOptions.length > 0 ? `${selectedOptions.length} selected` : "Select options"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search options..." />
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option}
                  onSelect={() => updateSelectedOptions(option)}
                >
                  <Check
                    className={`mr-2 h-4 w-4 ${selectedOptions.includes(option) ? "opacity-100" : "opacity-0"}`}
                  />
                  {option}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
