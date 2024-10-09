import React from "react";
import { batches } from "../helper/data";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Archives = () => {
  const navigate = useNavigate();

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
        <h2>The Archives</h2>
        <p>
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

      <div></div>
    </div>
  );
};

export default Archives;
