import { React, useState, useEffect } from "react";
import { members } from "../helper/data";

const Membership = () => {
  const [displayedList, setDisplayedList] = useState(members);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    setSearchInput(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const filteredList = members.filter((member) =>
      member.name.toLowerCase().includes(searchInput)
    );
    setDisplayedList(filteredList);
  }, [searchInput]);

  return (
    <div className="big-container" style={{ margin: "2vw 0" }}>
      <h2>Membership</h2>

      <p style={{ marginBottom: ".8vw" }}>
        This membership is more than just an ID number—it’s your gateway to
        exclusive W experience, including but not limited to: gaining access to
        non-batch activities, movie nights, and meeting the minimum requirement
        to join the Walker Archives writing community, among other benefits.
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "left",
          margin: "auto",
        }}
      >
        <img
          src="/search.png"
          style={{
            height: "2.4vw",
            marginRight: "1vw",
          }}
        />
        <input
          id="search"
          value={searchInput}
          type="text"
          placeholder="Search based on OC name..."
          onChange={(event) => {
            handleChange(event);
          }}
          style={{
            fontSize: "1.2vw",
            height: "2.4vw",
            padding: "1.2vw",
            borderColor: "black",
            backgroundColor: "transparent",
            borderRadius: ".8vw",
            borderWidth: ".2vw",
            width: "50%",
            borderStyle: "solid",
          }}
        ></input>
      </div>

      <table
        style={{ width: "100%", marginTop: ".8vw" }}
        className="member-list"
      >
        <tr
          style={{
            height: "2.4vw",
            backgroundColor: "black",
            textAlign: "center",
            color: "#fffaf0",
            fontSize: "1.4vw",
          }}
        >
          <th>
            Name
            {/* <img
              src="/sort.png"
              style={{ height: "1.2vw" }}
              onClick={handleSortName}
            ></img> */}
          </th>
          <th>
            ID
            {/* <img
              src="/sort.png"
              style={{ height: "1.2vw" }}
              onClick={handleSortId}
            ></img> */}
          </th>
        </tr>

        {displayedList.map((entry) => {
          return (
            <tr style={{ fontSize: "1.4vw" }}>
              <td>{entry.name}</td>
              <td>WLKR{entry.id}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Membership;
