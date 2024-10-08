import React from "react";

const Main = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "60% 35%",
        fontSize: "1.2vw",
        gap: "5%",
        margin: "2vw 0",
      }}
    >
      <div>
        <em>Inventore et adipisci.</em>
        <h2>
          Exploring worlds,
          <br />
          one archive at a time.
        </h2>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud .
        </p>
      </div>

      <div style={{ backgroundColor: "blue" }}>
        <img
          src="https://phm.org.uk/wp-content/uploads/2018/05/LHASC-@-Peoples-History-Museum-004-960x535.jpg"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        ></img>
      </div>
    </div>
  );
};

export default Main;
