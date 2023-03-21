import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Question from "./page/Question";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question/*" element={<Question />} />
    </Routes>
  );
};

export default Router;
