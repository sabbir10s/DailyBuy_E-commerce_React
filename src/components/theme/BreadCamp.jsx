import React from "react";

const BreadCamp = ({ first, second, third, four }) => {
  return (
    <div>
      <p>
        <span className="text-primary-600 font-semibold text-sm"> Home &gt;</span>{" "}
        <span className="text-primary-600 font-semibold text-sm">Breakfast & Dairy &gt;</span>{" "}
        <span className="text-gray-600 text-sm">Coffee-Mate Coffee Creamer</span>
      </p>
    </div>
  );
};

export default BreadCamp;
