import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { AnimatedNav } from "../components/NavigationBar/AnimatedNav";
import { Timeline } from "../components/Timeline";
import ben from "../img/ben.jpeg";
import { fadeIn } from "../shared/utils";

const Wrapper = styled.div`
  .about {
    height: 500px;
  }

  .image {
    background: url(${ben}) no-repeat 50% 0%;
    filter: grayscale(1);
  }
`;

export const AboutPage: React.FC = () => {
  const imageHeadingRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Anlam veremedim ama düzelteceğiz
    window.scrollTo({ top: 0 });

    fadeIn({
      elRefs: [imageHeadingRef, imageRef, timelineRef],
      from: "bottom",
      stagger: 0.3,
    });
  });

  return (
    <React.Fragment>
      <AnimatedNav />
      <Wrapper className="wrapper">
        <div className="whitespace"></div>
        <div className="container">
          <div className="row">
            <h3 className="text-center mt-3 mb-5" ref={imageHeadingRef}>
              bir fotoğrafım.
            </h3>
            <div className="col-lg-12 about image" ref={imageRef} />
          </div>
        </div>
        <div className="container">
          <div className="hero-content" ref={timelineRef}>
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
