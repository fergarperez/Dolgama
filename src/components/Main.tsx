import React from "react";
import Hero from "./Hero";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import AboutUs from "./AboutUs";
import Products from "./Products";
import WhyUs from "./WhyUs";
import Contact from "./Contact";

function Main() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <AboutUs />
      <Products />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}

export default Main;
