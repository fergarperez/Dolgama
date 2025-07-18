"use client";
import { useState, useEffect } from "react";

export type Language = "es" | "en";

const isValidLanguage = (lang: string | null): lang is Language =>
  lang === "es" || lang === "en";

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang");
      setLanguage(isValidLanguage(saved) ? saved : "es");
    }
  }, []);

  const getLanguage = () => {
    return language;
  };

  const updateLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return {
    getLanguage,
    setLanguage: updateLanguage,
  };
};
