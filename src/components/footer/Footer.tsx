"use client";
import { useTranslation } from "@/i18n/useTranslations";
import React from "react";

function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-ecogrow-dark text-white py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">Dolgama</span>
            </div>
            <p className="text-ecogrow-light mb-4">{t("description")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-ecogrow-light hover:text-white transition-colors"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-ecogrow-light hover:text-white transition-colors"
                aria-label="Instagram"
              >
                IG
              </a>
              <a
                href="#"
                className="text-ecogrow-light hover:text-white transition-colors"
                aria-label="Twitter"
              >
                X
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4"></h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#productos"
                  className="text-ecogrow-light hover:text-white transition-colors"
                >
                  {t("products")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-ecogrow-light hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-ecogrow-light hover:text-white transition-colors"
                >
                  {t("contact")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-ecogrow-light hover:text-white transition-colors"
                >
                  {t("terms")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("products")}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-ecogrow-light hover:text-white transition-colors"
                >
                  Fertilizantes Orgánicos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-ecogrow-light hover:text-white transition-colors"
                >
                  Bioestimulantes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-ecogrow-light hover:text-white transition-colors"
                >
                  Micorrizas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-ecogrow-light hover:text-white transition-colors"
                >
                  Asesoría Técnica
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ecogrow-light/20 pt-8 text-center">
          <p className="text-ecogrow-light">{t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
