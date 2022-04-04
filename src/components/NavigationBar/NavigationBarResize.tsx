import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Resize = styled.div`
  z-index: 1;
  top: 0px;
  position: fixed;
  background: #0f0f0f;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  transition: all 1s ease-out;

  #menu-mobile {
    height: 90px;
    position: absolute;
    left: 45%;
    transform: translateX(-40%);
    text-align: center;
    display: table-cell;
    vertical-align: center;
  }

  #menu-mobile li {
    display: block;
    text-align: center;
    padding: 10px 0;
    font-size: 50px;
    min-height: 50px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  li:nth-child(1) {
    margin-top: 140px;
  }

  #menu-mobile li a {
    color: #fff;
  }

  #menu-mobile li a:hover {
    text-decoration: none;
  }

  .active {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 768px) {
    li span {
      font-weight: bolder;
    }
  }

  @media (min-width: 768px) {
    visibility: hidden !important;
  }

  .close-btn {
    position: absolute;
    right: 16px;
    font-weight: 300;
    z-index: 2;
    cursor: pointer;
    top: -2px;
    line-height: 80px;
  }
`;

export type NavigationBarResizeProps = {
  setToggle: (value: boolean) => void;
  toggle: boolean;
};

export const NavigationBarResize: React.FC<NavigationBarResizeProps> = ({
  setToggle,
  toggle,
}) => {
  return (
    <Resize id="resize" className={toggle ? "active" : ""}>
      <div className="close-btn" onClick={() => setToggle(false)}>
        close
      </div>

      <ul id="menu-mobile">
        <li>
          <Link to="/">
            anasayfa<span>.</span>
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
      </ul>
    </Resize>
  );
};
