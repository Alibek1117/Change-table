import React from "react";
import Buttons from "./Buttons";
import Right1 from "./Right1";
import Right2 from "./Right2";
import Right3 from "./Right3";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Right4 from "./Right4";

const CardBox = () => {
  return (
    <div className="w-[70%] border bg-white p-8 rounded-md flex">
      <BrowserRouter>
        <Buttons />
        <div className="right">
          <Routes>
            <Route path="/" element={<Right1 />} />
            <Route path="/2" element={<Right2 />} />
            <Route path="/3" element={<Right3 />} />
            <Route path="/4" element={<Right4 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default CardBox;
