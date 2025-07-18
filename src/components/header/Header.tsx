// use an react icon from lucid react
"use client";
import { Amphora } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslations";
import React from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "./ToggleLanguage";

function Header() {
  const { t } = useTranslation("header");

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-ecogrow-light/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Amphora className="h-8 w-8 text-ecogrow-dark" />
          <span className="text-2xl font-bold text-ecogrow-dark">Dolgama</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#inicio"
            className="text-ecogrow-dark hover:text-ecogrow-primary transition-colors"
          >
            {t("home")}
          </a>
          <a
            href="#nosotros"
            className="text-ecogrow-dark hover:text-ecogrow-primary transition-colors"
          >
            {t("about")}
          </a>
          <a
            href="#productos"
            className="text-ecogrow-dark hover:text-ecogrow-primary transition-colors"
          >
            {t("products")}
          </a>
          <a
            href="#contacto"
            className="text-ecogrow-dark hover:text-ecogrow-primary transition-colors"
          >
            {t("contact")}
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button className="bg-ecogrow-primary hover:bg-ecogrow-dark text-white rounded-full">
            {t("contact")}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
