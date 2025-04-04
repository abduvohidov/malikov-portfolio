"use client";
import { setLanguageValue } from "@/entities/LangSwitch/SetLangValue";
import { cn } from "@/shared/lib/cn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Globe } from "lucide-react";
import { FC, useState } from "react";

interface LangSwitchProps {
  className?: string;
  locale: string;
}

export const LangSwitch: FC<LangSwitchProps> = ({ className, locale }) => {
  const [languageValue, setSelectedLanguageValue] = useState(locale);

  function handleLangChange(value: string) {
    setSelectedLanguageValue(value);
    setLanguageValue(value);
  }

  return (
    <div className={cn(className)}>
      <Select onValueChange={handleLangChange} value={languageValue}>
        <SelectTrigger className="w-[140px]">
          <Globe />
          <SelectValue placeholder={locale} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ru">Русский</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
