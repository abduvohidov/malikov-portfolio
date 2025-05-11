import { PriceCard } from "@/features/PriceCard";
import { ServiceAccordion } from "@/features/ServiceAccordion";
import { TabsServices } from "@/features/TabsServices";
import { additionalServicesList } from "@/shared/constants/additionalServicesList";
import { priceListData } from "@/shared/constants/priceList";
import { Card } from "@/shared/ui/card";
import { Text } from "@/shared/ui/Text";
import { useTranslations } from "next-intl";

export const Services = () => {
  const t = useTranslations("services");

  function renderShortFormVideosPriceList() {
    if (!priceListData) return;

    return priceListData(t)
      .slice(0, 3)
      .map((item, index) => (
        <PriceCard
          className="mx-auto max-lg:mt-6 w-full"
          key={index}
          title={item.title}
          content={item.content}
          price={item.price}
          description={item?.description}
          bestFor={item?.bestFor}
          turnaround={item?.turnaround}
          revisions={item?.revisions}
        />
      ));
  }

  function renderLongFormVideosPriceList() {
    if (!priceListData) return;

    return priceListData(t)
      .slice(3, 6)
      .map((item, index) => (
        <PriceCard
          className="mx-auto max-lg:mt-6 w-full"
          key={index}
          title={item.title}
          content={item.content}
          price={item.price}
          description={item?.description}
          bestFor={item?.bestFor}
          turnaround={item?.turnaround}
          revisions={item?.revisions}
        />
      ));
  }

  function renderAdditionalServicesList() {
    if (!additionalServicesList) return;

    return additionalServicesList(t).map((item, index) => (
      <ServiceAccordion
        title={item.category}
        contents={item.services}
        key={index}
      />
    ));
  }

  return (
    <div>
      <Text variant="display-3" className="text-center">
        {t("title")}
      </Text>
      <TabsServices
        shortVideosContent={renderShortFormVideosPriceList()}
        longVideosContent={renderLongFormVideosPriceList()}
      />
      <Card className="mx-auto p-0 mt-8 gap-0">
        {renderAdditionalServicesList()}
      </Card>
    </div>
  );
};
