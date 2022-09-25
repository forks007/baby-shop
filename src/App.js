import React from "react";
import Navbar from "./contents/Navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./contents/Hero";
import Serivces from "./contents/Services";
import BestProducts from "./contents/BestProducts";
import Compliment from "./contents/Compliment";
import Footer from "./contents/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Serivces />
      <BestProducts />
      <Compliment />
      <Footer />
    </div>
  );
}

export default App;
