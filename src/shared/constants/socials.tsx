import { Instagram, Linkedin, Send, Youtube } from "lucide-react";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

export interface SocialModel {
  text: string;
  icon: ReactNode;
  link: string;
}
export function useSocials(): { data: SocialModel[] } {
  const t = useTranslations("Social");

  const iconClass =
    "dark:text-ring dark:group-hover:text-primary !size-12 duration-300 transition-all";

  const data = [
    {
      text: "Instagram",
      link: "https://www.instagram.com/azka.aedits?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      icon: <Instagram className={iconClass} />,
    },
    {
      text: "Telegram",
      link: "https://t.me/azkaedits",
      icon: <Send className={iconClass} />,
    },
    {
      text: "Youtube",
      link: "https://www.youtube.com/@mlkvazka1",
      icon: <Youtube className={iconClass} />,
    },
    {
      text: "Linkedin",
      link: "/link-linkedin",
      icon: <Linkedin className={iconClass} />,
    },
  ];

  return { data };
}
