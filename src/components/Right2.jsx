import React from "react";
import { Link } from "react-router-dom";

const Right2 = () => {
  return (
    <div className=" flex-col justify-center ml-[150px]">
      <h1 className="text-2xl font-[600]">Choose description content</h1>
      <div className="btnss mt-16">
        <Link to="/" className="text-2xl font-[400] bg-gray-300 p-4  mb-4 rounded ">
          Back
        </Link>
        <Link to="/3" className="text-2xl font-[400] bg-gray-300 p-4  mb-4 rounded ml-3">
          Submit description
        </Link>
      </div>
    </div>
  );
};

export default Right2;
