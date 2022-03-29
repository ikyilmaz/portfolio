import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
  return (
    <StyledBrand>
      <Link to="/">ismail kurban yılmaz</Link>
    </StyledBrand>
  );
};
