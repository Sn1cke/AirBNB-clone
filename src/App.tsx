import React from "react";
import "./App.scss";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div id="app-container">
      <Navbar />
      <Hero />
      <div className="card-container">{cards}</div>
    </div>
  );
}
