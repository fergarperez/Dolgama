"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Leaf, Recycle } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { useTranslation } from "@/i18n/useTranslations";

function AboutUs() {
  const { t } = useTranslation("aboutUs");

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section id="nosotros" className="py-20 w-full bg-ecogrow-lightest">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ecogrow-dark mb-6">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          className="w-full grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Leaf,
              title: t("biofertilizationTitle"),
              desc: t("biofertilizationDescription"),
            },
            {
              icon: Recycle,
              title: t("ecoFriendlyTitle"),
              desc: t("ecoFriendlyDescription"),
            },
            {
              icon: Clock,
              title: t("lastingTitle"),
              desc: t("lastingDescription"),
            },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="text-center p-8 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-ecogrow-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-ecogrow-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-ecogrow-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
