import React from "react";
import Hero from "./Hero";
import Header from "./header/Header";

function Main() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      <Hero />
    </main>
  );
}

export default Main;
