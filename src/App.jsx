import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Archives from "./pages/Archives";
import Team from "./pages/Team";
import Rules from "./pages/Rules";

function App() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "beige",
          width: "80vw",
          borderRadius: "0.8vw",
          padding: "5vw",
        }}
      >
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Main></Main>} />
          <Route path="about" element={<AboutUs></AboutUs>} />
          <Route path="archives" element={<Archives></Archives>} />
          <Route path="people" element={<Team></Team>} />
          <Route path="rules" element={<Rules></Rules>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
