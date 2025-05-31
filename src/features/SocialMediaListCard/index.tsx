import { cn } from "@/shared/lib/cn";
import { Card, CardContent } from "@/shared/ui/card";
import { Text } from "@/shared/ui/Text";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface SocialMediaListCardProps {
  className?: string;
  icon: ReactNode;
  text: string;
  link: string;
}

export const SocialMediaListCard: FC<SocialMediaListCardProps> = (props) => {
  const { className, icon, text, link } = props;

  return (
    <Link href={link}>
      <Card
        className={cn(
          className,
          "dark:hover:border-primary dark:border-ring border-primary hover:scale-105 duration-300 transition-all group"
        )}
      >
        <CardContent className="flex items-center justify-center gap-6">
          {icon}
          <Text
            variant="display-2"
            className="dark:text-ring dark:group-hover:text-primary duration-300 transition-all"
          >
            {text}
          </Text>
        </CardContent>
      </Card>
    </Link>
  );
};
