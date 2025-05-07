interface PriceListDataType {
  title: string;
  content: string[];
  price: {
    from: number;
    to: number;
  };
}

export const priceListData = (
  t: (key: string) => string
): PriceListDataType[] => {
  return [
    {
      title: t("prices.basic.title"),
      content: [
        t("prices.basic.infolist.list1"),
        t("prices.basic.infolist.list2"),
        t("prices.basic.infolist.list3"),
        t("prices.basic.infolist.list4"),
        t("prices.basic.infolist.list5"),
      ],
      price: {
        from: 10,
        to: 15,
      },
    },
    {
      title: t("prices.intermediate.title"),
      content: [
        t("prices.intermediate.infolist.list1"),
        t("prices.intermediate.infolist.list2"),
        t("prices.intermediate.infolist.list3"),
        t("prices.intermediate.infolist.list4"),
        t("prices.intermediate.infolist.list5"),
        t("prices.intermediate.infolist.list6"),
        t("prices.intermediate.infolist.list7"),
        t("prices.intermediate.infolist.list8"),
      ],
      price: {
        from: 30,
        to: 40,
      },
    },
    {
      title: t("prices.advanced.title"),
      content: [
        t("prices.advanced.infolist.list1"),
        t("prices.advanced.infolist.list2"),
        t("prices.advanced.infolist.list3"),
        t("prices.advanced.infolist.list4"),
        t("prices.advanced.infolist.list5"),
      ],
      price: {
        from: 50,
        to: 60,
      },
    },
  ];
};
