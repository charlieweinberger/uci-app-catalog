import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";

export default function Combobox({ options, selectedOptions, setSelectedOptions }: {
  options: string[],
  selectedOptions: string[],
  setSelectedOptions: (options: string[]) => void
}) {

  const updateSelectedOptions = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((t) => t !== option));
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
