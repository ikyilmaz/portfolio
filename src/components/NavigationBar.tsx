import React from "react";
import styled from "styled-components";

//Navigasyon Barım
const MyNav = styled.nav`
  width: 100%;
  background: #0f0f0f;
  height: 80px;
  position: fixed;
  z-index: 1;
`;

// Adımın gözükeceği yer marka logosu gibi
const Brand = styled.span`
  float: left;
  display: block;
  margin-left: 82px;
  line-height: 80px;
  font-weight: bold;

  a {
    color: #fff;
    transition: all 0.3s ease-out;
  }

  a:hover {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    #brand {
      margin-left: 24px;
    }
  }
`;

// Doğal olarak bir menü lazım
const Menu = styled.ul`
  float: left;
  right: 80px;
  position: fixed;

  li {
    padding-left: 40px;
    display: inline-block;
    cursor: pointer;
    font-weight: 300;
    line-height: 80px;
    position: relative;
    transition: all 0.3s ease-out;
  }

  li span {
    font-weight: 700;
  }

  li a {
    color: #fff;
  }

  li a:hover {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    #menu a {
      font-size: 20px;
      font-weight: 300;
    }

    nav #menu {
      display: none;
    }
  }

  @media (min-width: 768px) {
    #resize {
      visibility: hidden !important;
    }
  }
`;

// Mobil için toggle butonu
const Toggle = styled.div`
  position: absolute;
  right: 30px;
  top: 20px;
  font-weight: 300;
  z-index: 2;
  width: 30px;
  height: 30px;
  cursor: pointer;
  float: right;
  transition: all 0.3s ease-out;
  visibility: hidden;
  opacity: 0;

  @media (max-width: 768px) {
    #toggle {
      visibility: visible;
      opacity: 1;
      margin-top: 6px;
      margin-right: 4px;
    }
  }
`;

// !TODO
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

  #menu {
    height: 90px;
    position: absolute;
    left: 45%;
    transform: translateX(-40%);
    text-align: center;
    display: table-cell;
    vertical-align: center;
  }

  #menu li {
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

  #menu li a {
    color: #fff;
  }

  #menu li a:hover {
    text-decoration: none;
  }

  .active {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 768px) {
    #resize li span {
      font-weight: bolder;
    }
  }

  @media (min-width: 768px) {
    #resize {
      visibility: hidden !important;
    }
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

export const NavigationBar: React.FC = () => {
  return (
    <MyNav id="nav">
      {/* Adım burada olacak */}
      <Brand id="brand">
        <a>ismail</a>
      </Brand>
      {/* Adım burada olacak */}

      {/* Menü burası */}
      <Menu id="menu">
        <li>
          <a href="#">
            home<span>.</span>
          </a>
        </li>
        <li>
          <a href="#">
            work<span>.</span>
          </a>
        </li>
        <li>
          <a href="#">
            about me<span>.</span>
          </a>
        </li>
        <li>
          <a href="#">
            contact<span>.</span>
          </a>
        </li>
      </Menu>
      {/* Menü burası */}

      {/* Toggle butonu burası */}
      <Toggle id="toggle">
        <div className="span">menu</div>
      </Toggle>
      {/* Toggle butonu burası */}

      <Resize id="resize">
        <div className="close-btn">close</div>

        <ul id="menu">
          <li>
            <a href="#">
              home<span>.</span>
            </a>
          </li>
          <li>
            <a href="#">
              work<span>.</span>
            </a>
          </li>
          <li>
            <a href="#">
              about me<span>.</span>
            </a>
          </li>
          <li>
            <a href="#">
              contact<span>.</span>
            </a>
          </li>
        </ul>
      </Resize>
    </MyNav>
  );
};
