"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

function Contact() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section id="contacto" className="w-full py-20 bg-ecogrow-lightest">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ecogrow-dark mb-6">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a hacer crecer tu negocio de manera
            sostenible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="rounded-2xl border-0 shadow-lg p-8 bg-white">
              <CardContent>
                <h3 className="text-2xl font-semibold text-ecogrow-dark mb-6">
                  Envíanos un mensaje
                </h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nombre completo
                    </label>
                    <Input
                      id="nombre"
                      type="text"
                      placeholder="Tu nombre completo"
                      className="rounded-xl border-gray-200 focus:border-ecogrow-primary focus:ring-ecogrow-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      className="rounded-xl border-gray-200 focus:border-ecogrow-primary focus:ring-ecogrow-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="mensaje"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensaje
                    </label>
                    <Textarea
                      id="mensaje"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      rows={4}
                      className="rounded-xl border-gray-200 focus:border-ecogrow-primary focus:ring-ecogrow-primary"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-ecogrow-primary hover:bg-ecogrow-dark text-white rounded-xl py-3"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <Card className="rounded-2xl border-0 shadow-lg p-8 bg-white">
              <CardContent>
                <h3 className="text-2xl font-semibold text-ecogrow-dark mb-6">
                  Información de contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-ecogrow-primary" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-ecogrow-primary" />
                    <span className="text-gray-700">info@ecogrow.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-ecogrow-primary" />
                    <span className="text-gray-700">
                      123 Agricultura Ave, Ciudad Verde
                    </span>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl py-3 flex items-center justify-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    <span>Contactar por WhatsApp</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="aspect-video relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Ubicación de EcoGrow"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
