import { FC } from "react";
import { Text } from "../Text";
import { cn } from "@/shared/lib/cn";
import Link from "next/link";

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Link href={"/"}>
      <Text variant="code-inline-2" className={cn(className, "italic")}>
        malikovabduaziz
      </Text>
    </Link>
  );
};
