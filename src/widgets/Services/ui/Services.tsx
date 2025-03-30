import { PriceCard } from "@/features/PriceCard";
import { ServiceAccordion } from "@/features/ServiceAccordion";
import { additionalServicesList } from "@/shared/constants/additionalServicesList";
import { priceListData } from "@/shared/constants/priceList";
import { Card } from "@/shared/ui/card";
import { Text } from "@/shared/ui/Text";

export const Services = () => {
  function renderPriceList() {
    if (!priceListData) return;

    return priceListData?.map((item, index) => (
      <PriceCard
        key={index}
        className="max-w-[360px] lg:w-[320px] mx-auto max-lg:mt-6"
        tarifName={item.title}
        contents={item.content}
        price={item.price}
      />
    ));
  }

  function renderAdditionalServicesList() {
    if (!additionalServicesList) return;

    return additionalServicesList.map((item, index) => (
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
        Services price list
      </Text>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-12">
        {renderPriceList()}
      </div>
      <Card className="mx-auto p-0 mt-12 2xl:max-w-[88%] xl:max-w-[92%] lg:max-w-[98%] md:max-w-[97%] sm:max-w-[360px] max-w-[360px]  gap-0">
        {renderAdditionalServicesList()}
      </Card>
    </div>
  );
};
