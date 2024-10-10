import React from "react";

const Footer = () => {
  return (
    <>
      <hr></hr>
      <div
        style={{
          gridTemplate: "1 / 2",
          fontSize: "0.8vw",
          display: "grid",
          gridGap: "30vw",
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
            display: "grid",
            textAlign: "right",
          }}
        >
          Have something on your mind? We're all ears! Reach out to us with your
          queries or thoughts, and our team will respond as soon as possible.
          <img
            src="../../x.png"
            style={{
              height: "0.8vw",
              justifySelf: "end",
              margin: "0.1vw",
            }}
          ></img>
        </div>
      </div>
    </>
  );
};

export default Footer;
