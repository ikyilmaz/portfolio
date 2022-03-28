import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import styled, { createGlobalStyle } from "styled-components";
import { NavigationBar } from "./components/NavigationBar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

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
      <GlobalStyle />
      <Wrapper>
        <NavigationBar />
        <Hero />
        <Projects />
        <Footer />
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
