import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/herosection";
import ProofSection  from "./components/proofsection";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProofSection />
    </div>
  );
}

export default App;
