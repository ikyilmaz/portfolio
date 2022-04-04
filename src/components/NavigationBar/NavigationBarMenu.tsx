import { gsap, Expo } from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fadeIn } from "../../shared/utils";

const Menu = styled.ul`
  float: left;
  right: 80px;
  position: fixed;

  li {
    padding-left: 80px;
    display: inline-block;
    cursor: pointer;
    font-weight: 300;
    line-height: 80px;
    position: relative;
    transition: all 0.3s ease-out;
    transition: transform 0.5s ease-out;

    &:hover {
      transform: translateY(-3px);
    }
  }

  li span {
    font-weight: 700;
  }

  li a {
    color: #fff;
    text-decoration: none;
    font-size: 26px;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 768px) {
    a {
      font-size: 20px;
      font-weight: 300;
    }

    display: none;
  }
`;

export const NavigationBarMenu: React.FC = () => {
  const githubLinkRef = useRef<HTMLAnchorElement>(null);
  const homeLinkRef = useRef<HTMLAnchorElement>(null);
  const aboutLinkRef = useRef<HTMLAnchorElement>(null);
  const contactLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    fadeIn({
      elRefs: [githubLinkRef, homeLinkRef, aboutLinkRef, contactLinkRef],
      from: "top",
      stagger: 0.1,
    });
  });

  return (
    <Menu>
      <li>
        <a
          style={{ display: "block" }}
          ref={githubLinkRef}
          href="https://www.github.com/ikyilmaz"
          target={"_blank"}
        >
          github<span>.</span>
        </a>
      </li>
      <li>
        <Link style={{ display: "block" }} ref={homeLinkRef} to="/">
          anasayfa<span>.</span>
        </Link>
      </li>
      <li>
        <Link style={{ display: "block" }} ref={aboutLinkRef} to="/about-me">
          biraz benden<span>.</span>
        </Link>
      </li>
      <li>
        <Link style={{ display: "block" }} ref={contactLinkRef} to="/contact">
          iletişim<span>.</span>
        </Link>
      </li>
    </Menu>
  );
};
