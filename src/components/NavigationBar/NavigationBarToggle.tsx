import React from "react";
import styled from "styled-components";

// Mobil için toggle butonu
const Toggle = styled.div`
  .span {
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
  }

  @media (max-width: 768px) {
    .span {
      visibility: visible;
      opacity: 1;
      margin-top: 6px;
      margin-right: 4px;
    }

    .hide {
      visibility: hidden;
      opacity: 0;
    }
  }
`;

export type NavigationBarToggleProps = {
  setToggle: (value: boolean) => void;
  toggle: boolean;
};

export const NavigationBarToggle: React.FC<NavigationBarToggleProps> = ({
  setToggle,
  toggle,
}) => {
  return (
    <Toggle id="toggle" onClick={() => setToggle(true)}>
      <div className={toggle ? "hide span" : "span"}>menu</div>
    </Toggle>
  );
};
