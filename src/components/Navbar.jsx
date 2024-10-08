import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        height: "5vw",
        gridTemplate: "1 / 2",
        fontSize: "2vw",
        display: "grid",
        gridTemplateColumns: "repeat(2, auto)",
        alignItems: "center",
      }}
    >
      <img
        src="/WA_11.png"
        style={{
          height: "5vw",
          width: "auto",
          float: "left",
        }}
      ></img>

      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "repeat(4, auto)",
          alignItems: "center",
          textAlign: "right",
        }}
      >
        <Link to="/about">About Us</Link>
        <Link to="/archives">Archives</Link>
        <Link to="/team">People</Link>
        <Link to="/rules">Join Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
