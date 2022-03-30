import React, { useState } from "react";
import styled from "styled-components";
import { Brand } from "./Brand";
import { NavigationBarMenu } from "./NavigationBarMenu";
import { NavigationBarToggle } from "./NavigationBarToggle";
import { NavigationBarResize } from "./NavigationBarResize";

//Navigasyon Barım
const MyNav = styled.nav`
  width: 100%;
  border-bottom: 1px solid white;
  background: #0f0f0f;
  height: 80px;
  position: fixed;
  z-index: 1;

  .active {
    visibility: visible;
    opacity: 1;
  }
`;

export const NavigationBar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <MyNav>
      {/* Adım burada olacak */}
      <Brand />
      {/* Adım burada olacak */}

      {/* Menü burası */}
      <NavigationBarMenu />
      {/* Menü burası */}

      {/* Toggle butonu burası */}
      <NavigationBarToggle toggle={toggle} setToggle={setToggle} />
      {/* Toggle butonu burası */}

      {/* Mobil menü burası */}
      <NavigationBarResize toggle={toggle} setToggle={setToggle} />
      {/* Mobil menü burası */}
    </MyNav>
  );
};
