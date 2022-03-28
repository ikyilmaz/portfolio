import React from "react";
import styled from "styled-components";

const HeroWrapper = styled.div``;
const Header = styled.div``;
const Line = styled.div``;
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
