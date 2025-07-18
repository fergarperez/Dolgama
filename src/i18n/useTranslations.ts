// src/i18n/useTranslation.ts
"use client";

import { translations } from "./translations";
import { Language, useLanguage } from "./useLanguage";

type TranslationsType = typeof translations;
type Namespace = keyof TranslationsType;

// Extracts the keys for the given namespace from translations
type TranslationKeys<T extends Namespace> = keyof TranslationsType[T];

export const useTranslation = <T extends Namespace>(namespace: T) => {
  const { getLanguage } = useLanguage();
  const lang = getLanguage() as Language;

  const t = <K extends TranslationKeys<T>>(key: K): string => {
    const translationEntry = translations[namespace][key] as Record<
      Language,
      string
    >;
    return translationEntry[lang] || "";
  };

  return { t, lang };
};
