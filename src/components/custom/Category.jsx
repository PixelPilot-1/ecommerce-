'use client';

import { RiArrowDropDownLine } from 'react-icons/ri';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function DropdownMenuCheckboxes({
  selectedCategories,
  setSelectedCategories,
}) {
  const [open, setOpen] = useState(false);

  const categories = [
    { label: 'Dog food', stateKey: 'dogFood' },
    { label: 'Dog Toys', stateKey: 'dogToys' },
  ];

  const handleCategoryChange = (label) => (checked) => {
    if (checked) {
      setSelectedCategories((prev) => [...prev, label]);
    } else {
      setSelectedCategories((prev) =>
        prev.filter((category) => category !== label)
      );
    }
    setOpen(true);
  };

  const getButtonLabel = () => {
    if (selectedCategories.length === 0) {
      return 'Categories: All';
    }
    const selectedText = selectedCategories.join(', ');
    return selectedText.length > 20
      ? `${selectedText.slice(0, 20)}...`
      : selectedText;
  };

  return (
    <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full sm:w-auto">
            {getButtonLabel()}
            <RiArrowDropDownLine className="text-xl" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full sm:w-56">
          <DropdownMenuLabel>Categories</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={selectedCategories.length === 0}
            onCheckedChange={(checked) => {
              if (checked) setSelectedCategories([]);
            }}
          >
            All
          </DropdownMenuCheckboxItem>
          {categories.map((category) => (
            <DropdownMenuCheckboxItem
              key={category.stateKey}
              checked={selectedCategories.includes(category.label)}
              onCheckedChange={handleCategoryChange(category.label)}
            >
              {category.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
