"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTranslation } from "@/i18n/useTranslations";

function Hero() {
  const { t } = useTranslation("hero");

  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden w-full"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Lush farmland with green crops"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-ecogrow-dark/60"></div>
      </div>

      <motion.div
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="EcoGrow Logo"
            width={80}
            height={80}
            className="mx-auto mb-4 rounded-2xl"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Dolgama</h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-ecogrow-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {t("title")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-ecogrow-primary hover:bg-ecogrow-primary/90 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {t("cta")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
