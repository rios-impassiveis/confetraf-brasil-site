import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://rios-impossiveis.github.io/confetraf-brasil-site/",
  author: "CONFETRAF-BRASIL",
  desc: "Confederação Nacional dos Trabalhadores e Trabalhadoras da Agricultura Familiar do Brasil.",
  title: "CONFETRAF-BRASIL",
  ogImage: "confetraf-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000,
};

export const LOCALE = {
  lang: "pt-BR",
  langTag: ["pt-BR"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Facebook",
    href: "#",
    linkTitle: `${SITE.title} no Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "#",
    linkTitle: `${SITE.title} no Instagram`,
    active: false,
  },
  {
    name: "YouTube",
    href: "#",
    linkTitle: `${SITE.title} no YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "#",
    linkTitle: `WhatsApp da ${SITE.title}`,
    active: false,
  },
  {
    name: "Telegram",
    href: "#",
    linkTitle: `${SITE.title} no Telegram`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:",
    linkTitle: `Enviar e-mail para ${SITE.title}`,
    active: false,
  },
];
