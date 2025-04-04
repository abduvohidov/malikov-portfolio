import { cn } from "@/shared/lib/cn";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/ui/card";
import { Text } from "@/shared/ui/Text";
import { useTranslations } from "next-intl";
import React from "react";

interface PriceCardProps {
  className?: string;
  tarifName: string;
  contents: string[];
  price: { from: number; to: number };
}

export const PriceCard: React.FC<PriceCardProps> = (props) => {
  const { className, tarifName, contents, price } = props;
  const t = useTranslations();

  return (
    <Card className={cn(className, "relative min-w-[300px] xl:min-w-[380px]")}>
      <CardHeader>
        <Text variant="display-1">{tarifName}</Text>
      </CardHeader>
      <CardContent className="mb-12">
        <ul className="text-gray-300">
          {contents.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="absolute bottom-5">
        <Text variant="body-2" className="text-gray-300">
          {t("services.prices.price")}
          <span className="text-blue-400 font-bold px-1">
            ${price.from} - ${price.to}
          </span>
          {t("services.prices.oneMinute")}
        </Text>
      </CardFooter>
    </Card>
  );
};
