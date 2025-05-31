import { SocialMediaListCard } from "@/features/SocialMediaListCard";
import { SocialModel, useSocials } from "@/shared/constants/socials";
import { cn } from "@/shared/lib/cn";
import { Text } from "@/shared/ui/Text";
import { useTranslations } from "next-intl";
import { FC } from "react";

interface PortfolioProps {
  className?: string;
}

export const Portfolio: FC<PortfolioProps> = ({ className }) => {
  const t = useTranslations("portfolio");
  const { data: socials } = useSocials();

  if (!socials || socials.length === 0) return null;

  return (
    <div className={cn(className)}>
      <Text variant="display-3" className="text-center">
        {t("portfolio")}
      </Text>
      <Text
        variant="subheader-3"
        className="text-center text-ring mx-auto mt-2 md:w-2/6"
      >
        {t("toSocialLinks")}
      </Text>
      <div className="max-w-screen-sm mx-auto grid md:grid-cols-2 grid-cols-1 gap-6 md:mt-12 mt-4">
        {socials.map((item, index) => (
          <SocialMediaListCard
            key={index}
            icon={item.icon}
            text={item.text}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};
