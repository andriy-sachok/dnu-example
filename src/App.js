import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// import Navigation from "./components/navigation/Navigation";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DemoNavigation from "./components/navigation/DemoNavigation";

function App() {
  return (
    <Fragment>
      {/* <Navigation /> */}
      <DemoNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Fragment>
  );
}

export default App;
