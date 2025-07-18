"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getLanguage, setLanguage } from "@/i18n/config";

export function ModeToggle() {
  function toggleLanguage(lang: "es" | "en") {
    setLanguage(lang);
    window.location.reload();
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      onClick={() => toggleLanguage(getLanguage() === "es" ? "en" : "es")}
      aria-label="Toggle language"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
    </Button>
  );
}
