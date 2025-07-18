// src/i18n/useTranslation.ts
"use client";

import { translations } from "./translations";
import { useLanguage } from "./useLanguage";

type Namespace = keyof typeof translations;

export const useTranslation = <T extends Namespace>(namespace: T) => {
  const { getLanguage } = useLanguage();
  const lang = getLanguage();

  const t = <K extends keyof (typeof translations)[T]>(key: K): string => {
    return translations[namespace][key][lang] || "";
  };

  return { t, lang };
};
