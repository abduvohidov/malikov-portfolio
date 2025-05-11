export interface PriceListDataType {
  title: string;
  bestFor: string;
  content: string[];
  description: string;
  turnaround: string;
  revisions: string;
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
      description: t("prices.basic.discountInfo"),
      bestFor: t("prices.basic.bestFor"),
      turnaround: "24–48",
      revisions: "1",
      content: [
        t("prices.basic.infolist.list1"),
        t("prices.basic.infolist.list2"),
        t("prices.basic.infolist.list3"),
        t("prices.basic.infolist.list4"),
        t("prices.basic.infolist.list5"),
      ],
      price: {
        from: 15,
        to: 10,
      },
    },
    {
      title: t("prices.intermediate.title"),
      bestFor: t("prices.intermediate.bestFor"),
      description: t("prices.intermediate.discountInfo"),
      turnaround: "48-72",
      revisions: "2",
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
        from: 40,
        to: 30,
      },
    },
    {
      title: t("prices.advanced.title"),
      bestFor: t("prices.advanced.bestFor"),
      description: t("prices.advanced.discountInfo"),
      turnaround: "48–96",
      revisions: "3",
      content: [
        t("prices.advanced.infolist.list1"),
        t("prices.advanced.infolist.list2"),
        t("prices.advanced.infolist.list3"),
        t("prices.advanced.infolist.list4"),
        t("prices.advanced.infolist.list5"),
        t("prices.advanced.infolist.list6"),
      ],
      price: {
        from: 60,
        to: 50,
      },
    },
    {
      title: t("prices.basicLong.title"),
      bestFor: t("prices.basicLong.bestFor"),
      description: t("prices.basicLong.discountInfo"),
      turnaround: "24–48",
      revisions: "10",
      content: [
        t("prices.basicLong.infolist.list1"),
        t("prices.basicLong.infolist.list2"),
        t("prices.basicLong.infolist.list3"),
        t("prices.basicLong.infolist.list4"),
      ],
      price: {
        from: 60,
        to: 50,
      },
    },
    {
      title: t("prices.intermediateLong.title"),
      bestFor: t("prices.intermediateLong.bestFor"),
      description: t("prices.intermediateLong.discountInfo"),
      turnaround: "72–120",
      revisions: "10",
      content: [
        t("prices.intermediateLong.infolist.list1"),
        t("prices.intermediateLong.infolist.list2"),
        t("prices.intermediateLong.infolist.list3"),
        t("prices.intermediateLong.infolist.list4"),
        t("prices.intermediateLong.infolist.list5"),
        t("prices.intermediateLong.infolist.list6"),
        t("prices.intermediateLong.infolist.list7"),
        t("prices.intermediateLong.infolist.list8"),
      ],
      price: {
        from: 270,
        to: 250,
      },
    },
    {
      title: t("prices.advancedLong.title"),
      bestFor: t("prices.advancedLong.bestFor"),
      description: t("prices.advancedLong.discountInfo"),
      turnaround: "72–120",
      revisions: "10",
      content: [
        t("prices.advancedLong.infolist.list1"),
        t("prices.advancedLong.infolist.list2"),
        t("prices.advancedLong.infolist.list3"),
        t("prices.advancedLong.infolist.list4"),
        t("prices.advancedLong.infolist.list5"),
        t("prices.advancedLong.infolist.list6"),
        t("prices.advancedLong.infolist.list7"),
      ],
      price: {
        from: 400,
        to: 380,
      },
    },
  ];
};
