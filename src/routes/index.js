import React from "react";
import {
  Routes as WrapperRoutes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";

import My404Component from '../pages/My404Component'
import LandingPage from '../pages/LandingPage/index'


const Routes = () => {
  return (
    <Router>
      <WrapperRoutes>
        <Route path="*" element={<My404Component />} />
        <Route path="/" element={<LandingPage />} />
      </WrapperRoutes>
    </Router>
  );
};

export default Routes;
