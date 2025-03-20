import { FC } from "react";
import { ThemeDropdown } from "@/features/ThemeDropdown";
import { Logo } from "@/shared/ui/Logo";
import { NavList } from "./NavList";

export const TheHeader: FC = () => {
  return (
    <header>
      <div className="container mx-auto pt-5">
        <div className="flex justify-between items-center">
          <Logo />
          <NavList />
          <ThemeDropdown />
        </div>
      </div>
    </header>
  );
};
