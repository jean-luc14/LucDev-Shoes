import React, { useState, useEffect } from "react";
import "./B.scss";
import Derby from "../../Assets/images/H.jpg";
import Moccasins from "../../Assets/images/moccasins/7/gray.jpg";

// Debugging Component
const B = () => {
  const dowload = () => {
    console.log("derby-shoes".toUpperCase().replace("-", " "));
  };
  return (
    <>
      <div className="parent" onClick={dowload}>
        <div className="child"></div>
      </div>
    </>
  );
};
export default B;
