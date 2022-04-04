import React from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { Timeline } from "../components/Timeline";
import ben from "../img/ben.jpeg";

const Wrapper = styled.div`
  .about {
    height: 500px;
    margin-top: 120px;
  }

  .image {
    background: url(${ben}) no-repeat 50% 0%;
    filter: grayscale(1);
  }
`;

export const AboutPage: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Wrapper className="wrapper">
        <div className="whitespace"></div>
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 about image wow fadeInUp"
              data-wow-delay="1s"
            ></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <br />

            <div className="row">
              <div className="col-lg-12">
                <br />
                <br />
                <Timeline />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
};
