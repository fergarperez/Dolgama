"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/useLanguage";
import SpainIcon from "@/assets/icons/spain.svg";
import UKIcon from "@/assets/icons/uk.svg";
import Image from "next/image";

export function ModeToggle() {
  const { getLanguage, setLanguage } = useLanguage();

  function toggleLanguage(lang: "es" | "en") {
    setLanguage(lang);
    window.location.reload();
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative cursor-pointer p-2 rounded-full hover:bg-gray-100 transition-colors"
      onClick={() => toggleLanguage(getLanguage() === "es" ? "en" : "es")}
      aria-label="Toggle language"
    >
      {getLanguage() === "es" ? (
        <Image
          src={SpainIcon}
          alt="Spanish Language"
          width={24}
          height={24}
          className="h-5 w-5"
        />
      ) : (
        <Image
          src={UKIcon}
          alt="English Language"
          width={24}
          height={24}
          className="h-5 w-5"
        />
      )}
    </Button>
  );
}
