import React from "react";
import styled from "styled-components";

//Navigasyon Barım
const MyNav = styled.nav``;

// Adımın gözükeceği yer marka logosu gibi
const Brand = styled.span``;

// Doğal olarak bir menü lazım
const Menu = styled.ul``;

// Mobil için toggle butonu
const Toggle = styled.div``;

// !TODO
const Resize = styled.div``;

export const NavigationBar: React.FC = () => {
  return (
    <MyNav>
      {/* Adım burada olacak */}
      <Brand>
        <a>ismail</a>
      </Brand>
      {/* Adım burada olacak */}

      {/* Menü burası */}
      <Menu>
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
      <Toggle>
        <div className="span">menu</div>
      </Toggle>
      {/* Toggle butonu burası */}

      <Resize>
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
