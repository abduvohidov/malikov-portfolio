"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/shared/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/shared/ui/navigation-menu";
import { NavListType } from "@/shared/constants/navlist";

interface NavListProps {
  className?: string;
  navlist?: NavListType[];
}

export const NavList: React.FC<NavListProps> = (props) => {
  const { className, navlist } = props;
  const pathname = usePathname();

  function renderNavigationMenuLink() {
    if (!navlist) return;

    return navlist.map(({ href, label }) => (
      <NavigationMenuItem key={href} className="list-none">
        <Link href={href} legacyBehavior passHref>
          <NavigationMenuLink
            className={cn(
              navigationMenuTriggerStyle(),
              pathname === href && "bg-accent"
            )}
          >
            {label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    ));
  }

  return (
    <NavigationMenu className={cn(className, "gap-4")}>
      {renderNavigationMenuLink()}
    </NavigationMenu>
  );
};
