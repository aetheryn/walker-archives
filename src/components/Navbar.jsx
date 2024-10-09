import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        height: "5vw",
        gridTemplate: "1 / 2",
        fontSize: "1.2vw",
        display: "grid",
        gridTemplateColumns: "repeat(2, auto)",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img
          src="/WA_11.png"
          style={{
            height: "5vw",
            width: "auto",
            float: "left",
          }}
        ></img>
      </Link>

      <div
        style={{
          display: "inline-grid",
          gridTemplateColumns: "repeat(4, auto)",
          alignItems: "center",
          textAlign: "right",
        }}
      >
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/about"
        >
          About Us
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/archives/list"
        >
          Archives
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/people"
        >
          People
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "")}
          to="/rules"
        >
          Join Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
