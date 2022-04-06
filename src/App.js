import React from "react";
import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import AboutUs from "./components/About/AboutUs";
import Intro from "./components/Intro/Intro";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";

const App = () => (
  <div>
  <Navbar />
  <Header />
  <AboutUs />
  <Intro />
  <Gallery />
  <Footer />
  </div>
);

export default App;
