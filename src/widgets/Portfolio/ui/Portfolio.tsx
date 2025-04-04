import { PortfolioContentsList } from "@/features/PortfolioContentsList";
import { cn } from "@/shared/lib/cn";
import { Text } from "@/shared/ui/Text";
import { useTranslations } from "next-intl";
import { FC } from "react";

interface PortfolioProps {
  className?: string;
}

export const Portfolio: FC<PortfolioProps> = ({ className }) => {
  const t = useTranslations("portfolio");
  return (
    <div className={cn(className, "sm:flex items-start justify-between")}>
      <div>
        <Text variant="display-3" className="max-sm:text-center mb-3">
          {t("reels")}
        </Text>
        <div className="grid 2xl:grid-cols-2 grid-cols-1 2xl:gap-12 gap-5">
          <PortfolioContentsList
            CONTENT_LIST={CONTENT_LIST_Reels}
            className="mx-auto lg:my-4 xl:w-[250px] xl:h-[450px] lg:w-[200px] lg:h-[400px] md:w-[150px] md:h-[300px] sm:w-[200px] sm:h-[370px] w-[280px] h-[500px]"
          />
        </div>
      </div>
      <div>
        <Text
          variant="display-3"
          className="max-sm:text-center mb-3 max-sm:mt-16"
        >
          {t("content")}
        </Text>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <PortfolioContentsList
            CONTENT_LIST={CONTENT_LIST}
            className="mx-auto my-4 xl:w-[450px] xl:h-[250px] lg:w-[350px] lg:h-[200px] md:w-[270px] md:h-[150px] sm:w-[350px] sm:h-[200px] w-[80%] h-full"
          />
        </div>
      </div>
    </div>
  );
};

const CONTENT_LIST = [
  {
    src: "https://www.youtube.com/embed/dwHsifzccFg",
    title:
      "🧩  Facebook va Telegram integratsiyasi dasturchilarsiz 5 daqiqada amalga oshirish",
  },
  {
    src: "https://www.youtube.com/embed/dwHsifzccFg",
    title:
      "🧩  Facebook va Telegram integratsiyasi dasturchilarsiz 5 daqiqada amalga oshirish",
  },
  {
    src: "https://www.youtube.com/embed/dwHsifzccFg",
    title:
      "🧩  Facebook va Telegram integratsiyasi dasturchilarsiz 5 daqiqada amalga oshirish",
  },
  {
    src: "https://www.youtube.com/embed/dwHsifzccFg",
    title:
      "🧩  Facebook va Telegram integratsiyasi dasturchilarsiz 5 daqiqada amalga oshirish",
  },
  {
    src: "https://www.youtube.com/embed/dwHsifzccFg",
    title:
      "🧩  Facebook va Telegram integratsiyasi dasturchilarsiz 5 daqiqada amalga oshirish",
  },
  {
    src: "https://www.youtube.com/embed/dwHsifzccFg",
    title:
      "🧩  Facebook va Telegram integratsiyasi dasturchilarsiz 5 daqiqada amalga oshirish",
  },
];

const CONTENT_LIST_Reels = [
  {
    src: "https://www.youtube.com/embed/OIZkC1tC2YE",
    title:
      "Студенты могут выглядеть так же элегантно, как и МИЛЛИОНЕРЫ! #классическийстиль",
  },
  {
    src: "https://www.youtube.com/embed/OIZkC1tC2YE",
    title:
      "Студенты могут выглядеть так же элегантно, как и МИЛЛИОНЕРЫ! #классическийстиль",
  },
];
