import { React, useEffect, useState } from "react";
import { batches } from "../helper/data";
import { useNavigate, useParams } from "react-router-dom";

const Archive = () => {
  const batch = useParams();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const pages = batches.map((batch) => batch.id);

  function handleClick() {
    setShowModal(true);
  }

  function handlePlus() {
    navigate(`/archives/${Number(batch.id) + 1}`);
  }
  function handleMinus() {
    navigate(`/archives/${Number(batch.id) - 1}`);
  }

  function goToPage(id) {
    navigate(`/archives/${id}`);
  }

  return (
    <div style={{ margin: "2vw 0" }}>
      <img
        src={batches[batch.id - 1].src}
        style={{
          width: "100%",
          objectFit: "cover",
          height: "20vh",
          borderRadius: "0.8vw",
        }}
      ></img>

      <div
        style={{
          gridTemplate: "1 / 2",
          display: "grid",
          gridGap: "5vw",
          alignItems: "center",
          margin: "2vw 0",
        }}
      >
        <div style={{ gridRow: "1", gridColumn: "1" }}>
          <div style={{ fontWeight: "bolder", fontSize: "2vw" }}>
            {batches[batch.id - 1].name.toUpperCase()}
          </div>
          <div
            style={{
              whiteSpace: "pre-wrap",
              fontSize: "1vw",
              fontStyle: "italic",
            }}
          >
            {batches[batch.id - 1].quote}
          </div>
        </div>
        <div
          style={{
            gridRow: "1",
            gridColumn: "2",
            fontSize: ".8vw",
            textAlign: "right",
          }}
        >
          <em>Tags: {batches[batch.id - 1].tags}</em>
          <br />
          <em>
            {batches[batch.id - 1].codename[0]}: {batches[batch.id - 1].admins}
          </em>
        </div>
      </div>

      <p style={{ whiteSpace: "pre-wrap" }}>{batches[batch.id - 1].desc}</p>

      <div
        className="clickable"
        style={{ fontSize: "1vw" }}
        onClick={() => {
          handleClick();
        }}
      >
        Find their {batches[batch.id - 1].codename[1].toLowerCase()} here.
      </div>

      <div
        style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          margin: "2vw 0",
          backgroundColor: "black",
          borderRadius: "0.8vw",
          padding: "0 2vw",
          height: "20vh",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "25% 70%",
            gap: "1%",
            justifyContent: "center",
            alignItems: "center",
            padding: "0.8vw",
            backgroundColor: "black",
            height: "20vh",
          }}
        >
          <div>
            <img
              style={{
                width: "70%",
                height: "70%",
                objectFit: "contain",
                borderRadius: "0.8vw",
                backgroundColor: "beige",
              }}
              src={batches[batch.id - 1].testimony.pic}
            ></img>
          </div>

          <div
            style={{
              fontSize: "0.8vw",
              color: "beige",
            }}
          >
            <span
              style={{
                fontSize: "1vw",
                fontWeight: "bold",
              }}
            >
              "{batches[batch.id - 1].testimony.highlight}"
            </span>
            <br />
            <br />
            <span style={{ fontStyle: "italic", textAlign: "justify" }}>
              {batches[batch.id - 1].testimony.says}
            </span>
            <br />
            <br />
            <span style={{ fontWeight: "bold" }}>
              – {batches[batch.id - 1].testimony.who}
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplate: "1/12",
          alignItems: "center",
          justifyContent: "center",
          fontSize: ".8vw",
          gap: "2%",
        }}
      >
        <div className="toggle-page" style={{ gridRow: "1", gridColumn: "1" }}>
          {batch.id != 1 && <button onClick={handleMinus}>&#8249;</button>}
        </div>

        {pages.map((page) => {
          return (
            <div
              className={page == batch.id ? "unclickable" : "clickable"}
              style={{ gridRow: "1", gridColumn: Number(page + 1) }}
              onClick={() => goToPage(page)}
            >
              {page}
            </div>
          );
        })}

        <div
          className="toggle-page"
          style={{ gridRow: "1", gridColumn: pages.length + 2 }}
        >
          {batch.id != pages.length && (
            <button onClick={handlePlus}>&#8250;</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Archive;
