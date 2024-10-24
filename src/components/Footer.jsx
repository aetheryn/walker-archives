import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr></hr>
      <div
        style={{
          gridTemplate: "1 / 2",
          fontSize: "1vw",
          display: "grid",
          gridGap: "10vw",
          alignItems: "flex-end",
        }}
      >
        <div style={{ gridRow: "1", gridColumn: "1", textAlign: "left" }}>
          © 2024 Walker Archives. All rights reserved.
        </div>
        <div
          style={{
            gridRow: "1",
            gridColumn: "2",
            // display: "grid",
            textAlign: "right",
          }}
        >
          Have something on your mind? We're all ears!
          <br />
          Reach out to us with your queries or thoughts, and our team will
          respond as soon as possible.{" "}
          <a href="https://x.com/W_Archives/">
            <img
              src="../../x.png"
              style={{
                height: "0.8vw",
              }}
            ></img>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
