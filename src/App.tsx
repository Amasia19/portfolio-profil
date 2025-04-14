import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Design from "./components/Design"
import React from "./components/React"; 
import Hire from "./components/Hire";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/design" element={<Design />} />
        <Route path="/react" element={<React/>} /> 
        <Route path="/hire" element={<Hire />} />
        <Route path="/about" element={<About />} />
     
      </Routes>
    </Router>
  );
};

export default App;
