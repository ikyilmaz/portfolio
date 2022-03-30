import { gsap, Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import nodejs from "../img/nodejs.jpg";
import nestjs from "../img/nestjs.png";
import reactjs from "../img/reactjs.png";
import golang from "../img/golang.png";

const Wrapper = styled.div`
  h6 {
    text-align: center;
  }

  /* .vertical {
    margin-top: 40px;
    border-left: 1px solid #fff;
    height: 80px;
    position: absolute;
    left: 50%;
  } */

  .project {
    height: 250px;
  }

  .project1 {
    background: url(${nodejs}) no-repeat 50% 50%;
    background-size: contain;
  }

  .project1::after {
    content: "NodeJS.";
    font-family: "Roboto Mono";
    font-size: 36px;
    position: relative;
    color: #fff;
    display: block;
    top: 8%;
    right: 0;
    bottom: 0;
  }

  .project2 {
    background: url(${nestjs}) no-repeat 50% 50%;
    background-size: contain;
  }

  .project2::after {
    content: "NestJS.";
    font-family: "Roboto Mono";
    font-size: 36px;
    position: relative;
    color: #fff;
    display: block;
    top: 80%;
    left: 60%;
    right: 0;
    bottom: 0;
  }

  .project3 {
    background: url(${reactjs}) no-repeat 50% 50%;
    background-size: contain;
  }

  .project3::after {
    content: "ReactJS.";
    font-family: "Roboto Mono";
    font-size: 36px;
    position: relative;
    color: #fff;
    display: block;
    top: 80%;
    right: 0;
    bottom: 0;
  }

  .project4 {
    background: url(${golang}) no-repeat 50% 50%;
    background-size: contain;
  }

  .project4::after {
    content: "Golang.";
    font-family: "Roboto Mono";
    font-size: 36px;
    position: relative;
    color: #fff;
    display: block;
    top: 10%;
    left: 65%;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 768px) {
    .project {
      width: 90% !important;
      margin: 14px auto;
    }

    .vertical {
      display: none;
    }

    .project1::after,
    .project2::after,
    .project3::after,
    .project4::after {
      display: none;
    }
  }
`;

export const Projects: React.FC = () => {
  const projectFirstRef = useRef<HTMLDivElement>(null);
  const projectSecondRef = useRef<HTMLDivElement>(null);
  const projectThirdRef = useRef<HTMLDivElement>(null);
  const projectFourthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(projectFirstRef.current, {
      scrollTrigger: projectFirstRef.current,
      duration: 2,
      translateY: 200,
      opacity: 0,
      ease: Power1.easeInOut,
    });

    gsap.from(projectSecondRef.current, {
      scrollTrigger: projectSecondRef.current,
      duration: 2,
      translateY: 200,
      opacity: 0,
      ease: Power1.easeInOut,
    });
    gsap.from(projectThirdRef.current, {
      scrollTrigger: projectThirdRef.current,
      duration: 2,
      translateY: 200,
      opacity: 0,
      ease: Power1.easeInOut,
    });
    gsap.from(projectFourthRef.current, {
      scrollTrigger: projectFourthRef.current,
      duration: 2,
      translateY: 200,
      opacity: 0,
      ease: Power1.easeInOut,
    });
  });

  return (
    <Wrapper>
      <div className="container-fluid">
        <br />
        <br />
        <br />

        <div className="vertical"></div>
        <br />

        <div className="whitespace"></div>
        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-8"></div>

          <div
            ref={projectFirstRef}
            className="col-lg-4 project project1"
            //   onClick={() => (location.href = "project.html")}
          ></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
          <div
            ref={projectSecondRef}
            className="col-lg-6 project project2 wow fadeInUp"
            //   onClick={() => (location.href = "project.html")}
          ></div>

          <div className="col-lg-6"></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-7"></div>

          <div
            ref={projectThirdRef}
            className="col-lg-4 project project3 wow fadeInUp"
            //   onClick={() => (location.href = "project.html")}
          ></div>

          <div className="col-lg-1"></div>
        </div>

        <div className="whitespace"></div>

        <div className="row">
          <div className="col-lg-1"></div>

          <div
            ref={projectFourthRef}
            className="col-lg-5 project project4 wow fadeInUp"
            //   onClick={() => (location.href = "project.html")}
          ></div>

          <div className="col-lg-6"></div>
        </div>

        <div className="whitespace"></div>
      </div>
    </Wrapper>
  );
};
