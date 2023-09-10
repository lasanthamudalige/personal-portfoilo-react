import React from "react";
import Header from "./components/header";
import Intro from "./components/Intro";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
