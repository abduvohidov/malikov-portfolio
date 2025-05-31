import { PriceListDataType } from "@/shared/constants/priceList";
import { cn } from "@/shared/lib/cn";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Text } from "@/shared/ui/Text";
import { useTranslations } from "next-intl";
import React from "react";

interface PriceCardProps extends PriceListDataType {
  className?: string;
}

export const PriceCard: React.FC<PriceCardProps> = (props) => {
  const {
    className,
    title,
    content,
    price,
    description,
    bestFor,
    turnaround,
    revisions,
  } = props;
  const t = useTranslations();

  function renderContents() {
    if (!content || content.length === 0) return null;

    return content.map((item, index) => <li key={index}>- {item}</li>);
  }

  return (
    <Card className={cn(className, "relative min-w-[300px]")}>
      <CardHeader>
        <Text variant="display-1" className="text-primary">
          {title}
        </Text>
        <div className="w-full h-[1px] bg-secondary mt-2" />
      </CardHeader>

      <CardContent className="mb-12 h-[460px]">
        <ul>
          <Text variant="body-3" className="font-bold">
            {t("services.includes")}
          </Text>
          {renderContents()}
        </ul>
      </CardContent>

      <CardFooter className="absolute bottom-5">
        <div className="flex flex-col">
          <div className="w-full h-[1px] bg-secondary my-8" />
          <div>
            <Text variant="body-2">
              {t("services.turnaround")}: {turnaround} {t("services.hours")}
            </Text>
            <Text variant="body-2">
              {t("services.revisions")}: {revisions}{" "}
              {t("services.roundIncluded")}
            </Text>
          </div>
          {description && (
            <Text variant="caption-2" className="text-blue-300 py-4">
              {description}
            </Text>
          )}
          <Text variant="body-2" className="mb-1">
            {t("services.prices.price")}
            <span className="text-blue-300 font-bold px-1">
              ${price.from} - ${price.to}
            </span>
            {t("services.prices.oneMinute")}
          </Text>
          <Text className="text-gray-500">{t("services.allRatesInUsd")}</Text>
        </div>
      </CardFooter>
    </Card>
  );
};
