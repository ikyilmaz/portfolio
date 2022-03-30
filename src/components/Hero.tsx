import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { text } from "node:stream/consumers";

// Hero Component
const HeroWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: lighter;
    text-align: center;
    letter-spacing: -2px;
    line-height: 58px;
  }

  @media (max-width: 768px) {
    .header h1 {
      font-size: 22px;
    }
  }
`;

// Header
const Header = styled.div``;

// Yazı yazma efekti veren animasyonum
const typewriter = keyframes`
    from {
        width: 0;
    }
    to {
        width: 16em;
    }
`;

// işaretçinin yanıp sönme efekti
const blinkTextCursor = keyframes`
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
`;

// ekranın ortasında gözükecek olan yazı
const Line = styled.h1`
  width: 22em;
  top: 50%;
  margin: auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);

  animation: ${typewriter} 4s steps(40) 1s 1 normal both,
    ${blinkTextCursor} 500ms steps(40) infinite normal;

  @media (max-width: 768px) {
    @keyframes typewriter {
      from {
        width: 0;
      }
      to {
        width: 17em;
      }
    }
  }
`;

// ScrollDown componentinin aşağı yukarı gelme efekti
const fadeMoveDown = keyframes`
        0% {
      transform: translate(0, -20px) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 20px) rotate(45deg);
      opacity: 0;
    }
`;

// Aşağı ok
const ScrollDown = styled.div`
  position: absolute;
  left: 50%;
  bottom: 100px;
  display: block;
  text-align: center;
  font-size: 20px;
  z-index: 0;
  text-decoration: none;
  text-shadow: 0;
  width: 13px;
  height: 13px;
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: translate(-50%, 0) rotate(45deg);
  -webkit-transform: translate(-50%, 0) rotate(45deg);
  animation: ${fadeMoveDown} 3s cubic-bezier(0.19, 1, 0.22, 1) infinite;
`;

const LineDeneme = styled.h1`
  width: 22em;
  top: 50%;
  margin: auto;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
`;

const machineGun = (
  texts: string[],
  textRef: React.RefObject<HTMLHeadingElement>
) => {
  const tl = gsap.timeline({
    // repeat: -1,
    yoyo: false,
    repeatDelay: 0,
    defaults: {
      onComplete: () => {
        if (textRef.current) textRef.current.innerText = "";
      },
    },
  });

  texts.forEach((text, index) => {
    tl.to(textRef.current, {
      duration: text.length / 10,
      text,
      reversed: false,
      onComplete() {
        if ("Full-Stack Web Developer" === text) tl.pause();
      },
    }).to(textRef.current, {
      duration: 1,
      text,
      reversed: true,
    });
  });
};

export const Hero: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    const texts = [
      "Merhaba",
      "Ben İsmail Kurban Yılmaz",
      "Yazılımsal şeyler yaparım",
      "Kesinlikle yazılımsal şeyler",
      "Full-Stack Web Developer",
    ];
    machineGun(texts, textRef);
  });

  return (
    <React.Fragment>
      <HeroWrapper className="hero">
        <Header className="header">
          {/* <Line className="line anim-typewriter">
          </Line> */}
          <LineDeneme ref={textRef} id="text">
            {/* Yazılımsal şeyler yaparım */}
          </LineDeneme>
        </Header>
      </HeroWrapper>

      <ScrollDown className="scroll-down"></ScrollDown>
    </React.Fragment>
  );
};
