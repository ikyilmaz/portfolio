import { gsap, Expo } from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fadeIn } from "../../shared/utils";

const StyledBrand = styled.span`
  float: left;
  display: block;
  margin-left: 82px;
  line-height: 80px;
  font-weight: bold;
  font-size: 22px;

  a {
    color: #fff;
    transition: all 0.3s ease-out;
  }

  a:hover {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin-left: 24px;
  }
`;

export const Brand: React.FC = () => {
  const brandRef = useRef<HTMLSpanElement>(null);

  // Açılış Animasyonu
  useEffect(() => {
    fadeIn({ elRefs: [brandRef], from: "top" });
  });

  return (
    <StyledBrand ref={brandRef}>
      <Link to="/">ismail kurban yılmaz</Link>
    </StyledBrand>
  );
};
