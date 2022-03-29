import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <Menu>
      <li>
        <Link to="/">
          anasayfa<span>.</span>
        </Link>
      </li>
      <li>
        <Link to="/work">
          iş<span>.</span>
        </Link>
      </li>
      <li>
        <Link to="/about-me">
          biraz benden<span>.</span>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          iletişim<span>.</span>
        </Link>
      </li>
    </Menu>
  );
};
