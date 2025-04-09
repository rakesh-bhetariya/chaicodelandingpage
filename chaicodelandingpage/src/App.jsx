import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/herosection";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
