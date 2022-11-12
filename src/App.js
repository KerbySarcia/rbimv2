import React from "react";
import Login from "./pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import IndividualRecord from "./pages/IndividualRecord";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="individualrecord" element={<IndividualRecord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
