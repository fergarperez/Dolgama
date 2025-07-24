"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useTranslation } from "@/i18n/useTranslations";

function Products() {
  const { t } = useTranslation("products");

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section id="productos" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ecogrow-dark mb-6">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubre nuestra línea completa de productos bioorgánicos diseñados
            para maximizar el potencial de tus cultivos.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Tabs defaultValue="organicos" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-ecogrow-lightest rounded-2xl p-2">
              <TabsTrigger
                value="organicos"
                className="rounded-xl data-[state=active]:bg-ecogrow-primary data-[state=active]:text-white"
              >
                Fertilizantes Orgánicos
              </TabsTrigger>
              <TabsTrigger
                value="bioestimulantes"
                className="rounded-xl data-[state=active]:bg-ecogrow-primary data-[state=active]:text-white"
              >
                Bioestimulantes
              </TabsTrigger>
              <TabsTrigger
                value="micorrizas"
                className="rounded-xl data-[state=active]:bg-ecogrow-primary data-[state=active]:text-white"
              >
                Micorrizas
              </TabsTrigger>
            </TabsList>

            {["organicos", "bioestimulantes", "micorrizas"].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="aspect-video relative">
                          <Image
                            src="/placeholder.svg?height=200&width=300"
                            alt={`Producto ${category} ${item}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-ecogrow-dark mb-3">
                            {category === "organicos"
                              ? "EcoNutri"
                              : category === "bioestimulantes"
                              ? "BioBoost"
                              : "MicoRaíz"}{" "}
                            {item}
                          </h3>
                          <ul className="text-sm text-gray-600 mb-4 space-y-1">
                            <li>• Incrementa la productividad</li>
                            <li>• Mejora la calidad del suelo</li>
                            <li>• 100% orgánico y natural</li>
                          </ul>
                          <Button className="w-full bg-ecogrow-primary hover:bg-ecogrow-dark text-white rounded-full">
                            Más información
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

export default Products;
