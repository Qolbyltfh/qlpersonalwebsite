import React from "react";
import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

import My404Component from '../pages/My404Component'
import LandingPage from '../pages/LandingPage/index'
import About from "../pages/About";
import Resume from "../pages/Resume";
import Project from "../pages/Project";

const Routes = () => {
  return (
    <Router>
      <WrapperRoutes>
        <Route path="*" element={<My404Component />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Project />} />
      </WrapperRoutes>
    </Router>
  );
};

export default Routes;
