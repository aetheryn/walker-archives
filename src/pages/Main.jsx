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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <em>Inventore et adipisci.</em>
        <h2>
          Exploring worlds,
          <br />
          one archive at a time.
        </h2>
        <br />
        <p style={{ textAlign: "justify" }}>
          Uncover hidden stories of the past at Walker Archives, located in the
          heart of South Carolina. Our extensive collection offers a unique
          opportunity to explore different worlds through our archives.
        </p>
      </div>

      <div>
        <img
          src="https://phm.org.uk/wp-content/uploads/2018/05/LHASC-@-Peoples-History-Museum-004-960x535.jpg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.8vw",
          }}
        ></img>
      </div>
    </div>
  );
};

export default Main;
