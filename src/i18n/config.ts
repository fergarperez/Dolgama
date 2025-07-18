// src/i18n/config.ts
export type Language = "es" | "en";

const isValidLanguage = (lang: any): lang is Language =>
  lang === "es" || lang === "en";

let currentLanguage: Language = (() => {
  const saved = localStorage.getItem("lang");
  return isValidLanguage(saved) ? saved : "es";
})();

export const getLanguage = () => currentLanguage;

export const setLanguage = (lang: Language) => {
  currentLanguage = lang;
  // opcional: guarda en localStorage
  localStorage.setItem("lang", lang);
};
