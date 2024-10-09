import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import Archives from "./pages/Archives";
import Archive from "./components/Archive";
import Team from "./pages/Team";
import Rules from "./pages/Rules";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        display: "grid",
        backgroundColor: "black",
        width: "100vw",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        padding: "5vw",
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
          <Route path="archives/:id" element={<Archive></Archive>} />
          <Route path="archives/list" element={<Archives></Archives>} />
          <Route path="people" element={<Team></Team>} />
          <Route path="rules" element={<Rules></Rules>} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
