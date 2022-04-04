import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

const GlobalStyle = createGlobalStyle`
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #ffffff #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #0f0f0f;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 2px;
    border: 2px solid #000000;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: "JetBrains Mono" !important;
    background: #0f0f0f !important;
    color: #fff !important;
  }

  .whitespace {
    width: 100%;
    height: 100px;
  }
  
  .hr {
    background: rgba(255, 255, 255, 0.2);
    height: 1px;
  }

  @media(max-width: 768px) {
    .whitespace {
          display: none;
    }
  }

`;

function App() {
  return (
    <React.Fragment>
      <Router>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
