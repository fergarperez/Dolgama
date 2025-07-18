// src/i18n/useTranslation.ts
import { getLanguage } from "./config";
import { translations } from "./translations";

type Namespace = keyof typeof translations;

export const useTranslation = <T extends Namespace>(namespace: T) => {
  const lang = getLanguage();

  const t = <K extends keyof (typeof translations)[T]>(key: K): string => {
    return translations[namespace][key][lang] || "";
  };

  return { t, lang };
};
