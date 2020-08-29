import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderTitle> REACT ART NO.1 </HeaderTitle>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  top: 10px;
  right: 15px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const HeaderTitle = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  margin: 20px;
  color: #fff;
  cursor: pointer;
  transition-property: color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  &:hover {
    color: darkslategray;
  }
`;
