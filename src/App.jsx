import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const Main = React.lazy(() => import("./pages/Main"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Archives = React.lazy(() => import("./pages/Archives"));
const Archive = React.lazy(() => import("./components/Archive"));
const Team = React.lazy(() => import("./pages/Team"));
const Rules = React.lazy(() => import("./pages/Rules"));

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
          backgroundColor: "#fffaf0",
          width: "90vw",
          borderRadius: "0.8vw",
          padding: "5vw",
        }}
      >
        <Navbar></Navbar>

        <ScrollToTop></ScrollToTop>

        <Suspense>
          <Routes>
            <Route path="/" element={<Main></Main>} />
            <Route path="about" element={<AboutUs></AboutUs>} />
            <Route path="archives/:id" element={<Archive></Archive>} />
            <Route path="archives/list" element={<Archives></Archives>} />
            <Route path="people" element={<Team></Team>} />
            <Route path="rules" element={<Rules></Rules>} />
            {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
          </Routes>
        </Suspense>

        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
