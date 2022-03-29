import React from "react";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
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
  return (
    <MyNav>
      {/* Adım burada olacak */}
      <Brand />
      {/* Adım burada olacak */}

      {/* Menü burası */}
      <NavigationBarMenu />
      {/* Menü burası */}

      {/* Toggle butonu burası */}
      <NavigationBarToggle />
      {/* Toggle butonu burası */}

      {/* Mobil menü burası */}
      <NavigationBarResize />
      {/* Mobil menü burası */}
    </MyNav>
  );
};
