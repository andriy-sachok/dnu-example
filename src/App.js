import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

// import Navigation from "./components/navigation/Navigation";

import Home from "./pages/Home";
import PastAndPresent from "./pages/secondary pages/PastAndPresent";
import Education from "./pages/secondary pages/Education";
import Structure from "./pages/secondary pages/Structure";
import Science from "./pages/secondary pages/Science";
import InternationalCooperation from "./pages/secondary pages/InternationalCooperation";
import RoadMap from "./pages/secondary pages/RoadMap";
import Anniversary from "./pages/secondary pages/Anniversary";

import DemoNavigation from "./components/navigation/DemoNavigation";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Fragment>
      {/* <Navigation /> */}
      <DemoNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="past-and-present" element={<PastAndPresent />} />
        <Route path="education" element={<Education />} />
        <Route path="structure" element={<Structure />} />
        <Route path="science" element={<Science />} />
        <Route
          path="international-cooperation"
          element={<InternationalCooperation />}
        />
        <Route path="road-map-for-foreign-students" element={<RoadMap />} />
        <Route path="dnu`s-100th-anniversary" element={<Anniversary />} />
      </Routes>
      <Contacts />
    </Fragment>
  );
}

export default App;
