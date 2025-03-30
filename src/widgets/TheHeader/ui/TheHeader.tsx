import { FC } from "react";
import { Logo } from "@/shared/ui/Logo";
import { NavList } from "./NavList";
import { MobileNavList } from "./MobileNavList";

export const TheHeader: FC = () => {
  return (
    <header>
      <div className="container mx-auto pt-5 px-10">
        <div className="flex justify-between items-center">
          <Logo />
          <NavList className="max-sm:hidden" />
          <MobileNavList />
        </div>
      </div>
    </header>
  );
};
