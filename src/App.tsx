import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

const Wrapper = styled.div``;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: "Roboto Mono" !important;
    background: #0f0f0f !important;
    color: #fff !important;
  }

  .whitespace {
    width: 100%;
    height: 100px;
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
