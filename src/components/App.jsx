import React from "react";
import Header from "./header";
import Intro from "./Intro";
import Projects from "./projects";
import Contact from "./Contact";
import Footer from "./Footer";
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
