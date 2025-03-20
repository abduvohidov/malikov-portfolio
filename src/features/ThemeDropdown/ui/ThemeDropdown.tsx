"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Button } from "@/shared/ui/button";
import { Text } from "@/shared/ui/Text";

export function ThemeDropdown() {
  const { theme, setTheme } = useTheme();

  const iconTheme =
    theme == "light" ? (
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    ) : (
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    );

  const textTheme = theme === "light" ? "SUN" : "MOON";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default">
          <Text variant="body-1" className="flex gap-2 items-center">
            {iconTheme}
            {theme === "light" ? "SUN" : "MOON"}
          </Text>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          SUN
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          MOON
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
