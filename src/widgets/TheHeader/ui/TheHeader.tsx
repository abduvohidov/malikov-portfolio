import { FC } from "react";
import { Logo } from "@/shared/ui/Logo";
import { NavList } from "./NavList";
import { MobileNavList } from "./MobileNavList";
import { useTranslations } from "next-intl";
import { navlist } from "@/shared/constants/navlist";
import { LangSwitch } from "@/features/LangSwitch";
import { getLocale } from "next-intl/server";
import { ThemeDropdown } from "@/features/ThemeDropdown";

export const TheHeader: FC = async () => {
  const t = useTranslations("header");
  const locale = await getLocale();

  return (
    <header>
      <div className="container mx-auto pt-5 px-10">
        <div className="flex justify-between items-center">
          <Logo />
          <MobileNavList locale={locale} navlist={navlist(t)} />
          <NavList className="max-lg:hidden" navlist={navlist(t)} />
          <div className="flex items-center gap-5 max-lg:hidden">
            <LangSwitch locale={locale} />
            <ThemeDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};
