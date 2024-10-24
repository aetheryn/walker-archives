import React from "react";

const Team = () => {
  return (
    <div
      className="big-container"
      style={{
        display: "grid",
        fontSize: "1.2vw",
        margin: "2vw 0",
        textAlign: "center",
        gap: "2vh",
      }}
    >
      <h2>Meet The Team</h2>
      <div
        style={{
          display: "grid",
          gridTemplate: "1 / 3 ",
          alignItems: "center",
          justifyContent: "center",
          gap: "3vw",
        }}
      >
        <div
          style={{
            gridRow: "1",
            gridColumn: "1",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "18vw", height: "24vw", objectFit: "cover" }}
            src="/Martin.png"
          ></img>
          <br />
          Martin Walker
        </div>
        <div
          style={{
            gridRow: "1",
            gridColumn: "2",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "18vw", height: "24vw", objectFit: "cover" }}
            src="/Jerry.png"
          ></img>
          <br />
          Jerry Rogers
        </div>
        <div
          style={{
            gridRow: "1",
            gridColumn: "3",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "18vw", height: "24vw", objectFit: "cover" }}
            src="/Xander.png"
          ></img>
          <br />
          Alexander Nolan
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplate: "1 / 2 ",
          alignItems: "center",
          justifyContent: "center",
          gap: "3vw",
        }}
      >
        <div
          style={{
            gridRow: "1",
            gridColumn: "1",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "18vw", height: "24vw", objectFit: "cover" }}
            src="/Evie.png"
          ></img>
          <br />
          Evangeline Harper
        </div>
        <div
          style={{
            gridRow: "1",
            gridColumn: "2",
            display: "grid",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <img
            style={{ width: "18vw", height: "24vw", objectFit: "cover" }}
            src="/Serena.png"
          ></img>
          <br />
          Serena Morgan
        </div>
      </div>
    </div>
  );
};

export default Team;
