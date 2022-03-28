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
  body {
    margin: 0px;
    padding 0px;
    box-sizing: content-box !important;
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
