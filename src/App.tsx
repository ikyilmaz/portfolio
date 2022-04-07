import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { ExamplePage } from "./pages/ExamplePage";

const GlobalStyle = createGlobalStyle`
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: ${(props) => props.theme.white} ${(props) =>
  props.theme.white};
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: ${(props) => props.theme.black};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.white};
    border-radius: 2px;
    border: 2px solid ${(props) => props.theme.black};
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100%;
    font-family: "JetBrains Mono" !important;
    background: ${(props) => props.theme.black} !important;
    color: ${(props) => props.theme.white} !important;
  }

  html {
    overflow-x:hidden ;
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
      <ThemeProvider
        theme={{
          primary: "#ffffff",
          secondary: "#0f0f0f",
          white: "#ffffff",
          black: "#0f0f0f",
        }}
      >
        <Router>
          <GlobalStyle />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
