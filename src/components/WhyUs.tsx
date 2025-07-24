"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { Award, Leaf, Truck, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/useTranslations";

function WhyUs() {
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
    <section className="w-full py-20 bg-ecogrow-lightest">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ecogrow-dark mb-6">
            ¿Por qué elegir EcoGrow?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Somos líderes en innovación agrícola sostenible con un compromiso
            inquebrantable con la calidad.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Leaf,
              title: "Agricultura Sostenible",
              desc: "Cuidamos el planeta mientras nutrimos tus cultivos",
            },
            {
              icon: Award,
              title: "Calidad Certificada",
              desc: "Productos con certificaciones internacionales",
            },
            {
              icon: Users,
              title: "Asesoría Técnica",
              desc: "Equipo de expertos a tu disposición",
            },
            {
              icon: Truck,
              title: "Distribución Nacional",
              desc: "Llegamos a todo el país con rapidez",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="text-center p-6 rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white h-full">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-ecogrow-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-ecogrow-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-ecogrow-dark mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyUs;
