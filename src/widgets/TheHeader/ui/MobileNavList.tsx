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
import { Sheet, SheetContent, SheetTrigger } from "@/shared/ui/sheet";
import { Button } from "@/shared/ui/button";
import { Menu } from "lucide-react";
import { Logo } from "@/shared/ui/Logo";
import { DialogTitle } from "@radix-ui/react-dialog";

interface MobileNavListProps {
  className?: string;
}

export const MobileNavList: React.FC<MobileNavListProps> = (props) => {
  const { className } = props;
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const list = [
    { href: "/", label: "Main" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Menu className="!size-" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="px-6 pt-4 pb-12">
        <Logo />
        <ul className="list-none">
          {list.map(({ href, label }) => (
            <li key={href} className="pt-3">
              <Link
                href={href}
                className={cn(
                  "block text-lg font-medium hover:text-primary",
                  pathname === href && "text-primary font-semibold"
                )}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};
