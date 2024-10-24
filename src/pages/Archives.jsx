import React from "react";
import { batches } from "../helper/data";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Archives = () => {
  const navigate = useNavigate();

  return (
    <div
      className="big-container"
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
        <h2>The Archives</h2>
        <p style={{ marginBottom: ".8vw" }}>
          Step into the worlds that were previously explored in the past
          batches. Uncover the stories and immerse yourself in the adventures.
        </p>

        {batches.map((batch) => {
          return (
            <button onClick={() => navigate("/archives/" + batch.id)}>
              {batch.id}: {batch.name}
            </button>
          );
        })}
      </div>

      <div>
        <img
          src="https://st.depositphotos.com/1007971/1378/i/450/depositphotos_13786331-stock-photo-files-on-shelf.jpg"
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

export default Archives;
