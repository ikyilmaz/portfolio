import React from "react";
import styled, { keyframes } from "styled-components";

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
      font-size: 26px;
    }
  }
`;
const Header = styled.div``;

const typewriter = keyframes`
    from {
        width: 0;
    }
    to {
        width: 18em;
    }
`;

const blinkTextCussor = keyframes`
    from {
      border-right-color: rgba(255, 255, 255, 0.75);
    }
    to {
      border-right-color: transparent;
    }
`;

const Line = styled.h1`
  width: 24em;
  top: 50%;
  margin: auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);

  animation: ${typewriter} 4s steps(40) 1s 1 normal both,
    blinkTextCussor 500ms steps(40) infinite normal;

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
const ScrollDown = styled.div``;

export const Hero: React.FC = () => {
  return (
    <React.Fragment>
      <HeroWrapper className="hero">
        <Header className="header">
          <Line className="line anim-typewriter">
            I make brands matter in culture.
          </Line>
        </Header>
      </HeroWrapper>

      <ScrollDown className="scroll-down"></ScrollDown>
    </React.Fragment>
  );
};
