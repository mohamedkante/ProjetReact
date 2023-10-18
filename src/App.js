import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

//cette fonction pemet de creer un router avec react
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*le path="*" fonctionne si jamais l'url ne contient rien de déclarer au dessus*/}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
