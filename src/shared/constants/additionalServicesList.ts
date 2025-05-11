interface AdditionalServicesListType {
  category: string;
  services: string[];
}

export const additionalServicesList = (t: (key: string) => string): AdditionalServicesListType[] => [
  {
    category: t("additional.sounDesignAndAudioEditing.title"),
    services: [
      t("additional.sounDesignAndAudioEditing.infolist.list1"),
      t("additional.sounDesignAndAudioEditing.infolist.list2"),
      t("additional.sounDesignAndAudioEditing.infolist.list3"),
    ],
  },
  {
    category: t("additional.creativeEffect.title"),
    services: [
      t("additional.creativeEffect.infolist.list1"),
      t("additional.creativeEffect.infolist.list2"),
      t("additional.creativeEffect.infolist.list3"),
      t("additional.creativeEffect.infolist.list4"),
      t("additional.creativeEffect.infolist.list5"),
      t("additional.creativeEffect.infolist.list6"),
    ],
  },
  {
    category: t("additional.socialMediaAndShortForm.title"),
    services: [
      t("additional.socialMediaAndShortForm.infolist.list1"),
      t("additional.socialMediaAndShortForm.infolist.list2"),
      t("additional.socialMediaAndShortForm.infolist.list3"),
      t("additional.socialMediaAndShortForm.infolist.list4"),
      t("additional.socialMediaAndShortForm.infolist.list5"),
      t("additional.socialMediaAndShortForm.infolist.list6"),
    ],
  },
  {
    category: t("additional.aiAndAutomation.title"),
    services: [
      t("additional.aiAndAutomation.infolist.list1"),
      t("additional.aiAndAutomation.infolist.list2"),
      t("additional.aiAndAutomation.infolist.list3"),
      t("additional.aiAndAutomation.infolist.list4"),
    ],
  },
  {
    category: t("additional.freelanceAndCommercial.title"),
    services: [
      t("additional.freelanceAndCommercial.infolist.list1"),
      t("additional.freelanceAndCommercial.infolist.list2"),
      t("additional.freelanceAndCommercial.infolist.list3"),
      t("additional.freelanceAndCommercial.infolist.list4"),
      t("additional.freelanceAndCommercial.infolist.list5"),
      t("additional.freelanceAndCommercial.infolist.list6"),
    ],
  },
];
