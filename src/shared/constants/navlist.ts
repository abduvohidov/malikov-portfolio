export interface NavListType {
  href: string;
  label: string;
}
[];

export const navlist = (t: (key: string) => string): NavListType[] => [
  { href: "/", label: t("main") },
  { href: "/portfolio", label: t("portfolio") },
  { href: "/services", label: t("services") },
];
