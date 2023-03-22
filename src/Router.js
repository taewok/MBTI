import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Question from "./page/Question";
import Result from "./page/Result";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question/*" element={<Question />} />
      <Route path="/question/result" element={<Result />} />
    </Routes>
  );
};

export default Router;
