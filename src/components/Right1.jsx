import React from "react";
import { Link } from "react-router-dom";

const Right1 = () => {
  return (
    <div className="flex flex-col justify-between ml-[150px]">
      <h1 className="text-2xl font-[600]">Choose title content</h1>
      <div className="btnss mt-16">
        <Link to="2"  className="text-2xl font-[400] bg-gray-300 p-4 w-44 mb-4 rounded mt-12">
        Submit title
      </Link>
      </div>

    </div>
  );
};

export default Right1;
