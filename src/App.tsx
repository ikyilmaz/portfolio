import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled, { createGlobalStyle } from "styled-components";
import { NavigationBar } from "./components/NavigationBar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
          <Route
            path="/"
            element={
              <Wrapper>
                <NavigationBar />
                <Hero />
                <Projects />
                <Footer />
              </Wrapper>
            }
          />
          <Route path="/work" element={<h3>iş.</h3>} />
          <Route path="/about-me" element={<h3>benden biraz.</h3>} />
          <Route path="/contact" element={<h3>iletişim.</h3>} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
