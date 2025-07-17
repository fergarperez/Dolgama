import React from "react";
import Hero from "./Hero";

function Main() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Hero />
      {/* Other components can be added here */}
    </main>
  );
}

export default Main;
