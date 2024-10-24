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
            src="https://images.mubicdn.net/images/cast_member/704521/cache-598020-1602736076/image-w856.jpg"
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
            src="https://i.pinimg.com/736x/90/cb/20/90cb20bf376f03def7b579922a930ace.jpg"
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
            src="https://asianwiki.com/images/2/2e/Kim_Min-Kyu-1994-p1.jpg"
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
            src="https://pbs.twimg.com/media/FNP8odraMAEA9BX.jpg"
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
            src="https://i.namu.wiki/i/1fS8RDa9eIhgdQMIotCav-7vp_lmg0kxrRzI0m1GbNr2A_-AXpAvQD59Ohroi4FMxRy0y3es6esO1urWJ-IdOg.webp"
          ></img>
          <br />
          Serena Morgan
        </div>
      </div>
    </div>
  );
};

export default Team;
