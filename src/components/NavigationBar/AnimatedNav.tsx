import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Brand } from "./Brand";
import { FiMenu } from "react-icons/fi";

const NavWrapper = styled.div`
  div {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transform: scaleY(0);
    transform-origin: bottom;
  }
`;

const FirstLayer = styled.div`
  background-color: ${(props) => props.theme.primary};
`;

const SecondLayer = styled.div`
  background-color: ${(props) => props.theme.secondary};
`;

const NavBar = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  height: 75px;
  width: 100vw;

  padding-right: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu {
    outline: none;
    border: none;
    background-color: chocolate;
    color: white;
    padding: 10px 25px;
    border-radius: 50px;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
    }
  }
`;

const NavList = styled.ul`
  position: fixed;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 999;
  list-style: none;
`;

const NavListItem = styled.li`
  color: crimson;
  font-size: 100px;
  position: relative;

  a {
    display: block;
    color: ${(props) => props.theme.white};
    position: relative;
    text-decoration: none;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background-color: ${(props) => props.theme.white};
      width: 100%;
      height: 10px;
      transition: all 0.5s;
      transform: scaleX(0);
      transform-origin: left;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }
`;

export const AnimatedNav: React.FC = () => {
  const [reversed, setReversed] = useState(false);

  const firstLayerRef = useRef<HTMLDivElement>(null);
  const secondLayerRef = useRef<HTMLDivElement>(null);
  const navListRef = useRef<HTMLUListElement>(null);
  const navListSelector = gsap.utils.selector(navListRef);

  const tl = useRef<gsap.core.Timeline>(gsap.timeline());

  useEffect(() => {
    tl.current.to([firstLayerRef.current, secondLayerRef.current], {
      transform: "scaleY(1)",
      duration: 1,
      stagger: 0.3,
      ease: "Expo.easeInOut",
    });

    tl.current.fromTo(
      navListSelector("li a"),
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "Expo.easeInOut",
      },
      0.5
    );
  }, []);

  useEffect(() => {
    tl.current.reversed(reversed);
  }, [reversed]);

  const toggleNav = () => {
    setReversed(!reversed);
  };

  return (
    <React.Fragment>
      <NavList ref={navListRef}>
        <NavListItem>
          <a href="">Selamlar</a>
        </NavListItem>
        <NavListItem>
          <a href="">Agalar</a>
        </NavListItem>
        <NavListItem>
          <a href="">Yaşıyoruz</a>
        </NavListItem>
      </NavList>
      <NavWrapper>
        <FirstLayer ref={firstLayerRef} />
        <SecondLayer ref={secondLayerRef} />
      </NavWrapper>

      <NavBar>
        <Brand></Brand>
        <FiMenu cursor={"pointer"} size={30} onClick={toggleNav} />
      </NavBar>
    </React.Fragment>
  );
};
