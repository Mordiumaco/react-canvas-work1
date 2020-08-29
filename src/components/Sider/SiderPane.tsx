import React from "react";
import { CaretRightOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { SiderPaneStyledProps } from "./Sider";

interface SiderPaneProps {
  isActive?: boolean;
  setIsActive?: any;
}

/**
 * @since 2020.08.30
 * @description Side Panel에 관련된 Toggle Button Component 입니다.
 * 클릭하면 사이드 패널의 크기가 줄어듭니다.
 */
const SiderPane = ({ setIsActive, isActive }: SiderPaneProps) => {
  const onClickButtonArea = () => {
    setIsActive((previousState) => !previousState);
  };

  return (
    <SiderPanelStyled isActive={isActive}>
      <ButtonAreaStyled isActive={isActive} onClick={onClickButtonArea}>
        <CaretRightOutlined
          rotate={isActive ? 0 : 180}
          style={{ margin: "3px" }}
        />
      </ButtonAreaStyled>
    </SiderPanelStyled>
  );
};

const SiderPanelStyled = styled.div<SiderPaneStyledProps>`
  position: fixed;
  left: ${(props) => (props.isActive ? "-40px" : "0px")};
  top: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  background-color: #393f4c;
  border-radius: 5px;
  width: 60px;
  transition-property: left;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
  height: 50px;
  z-index: -1;
`;

const ButtonAreaStyled = styled.div<SiderPaneStyledProps>`
  width: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: #fff; */
`;

export default SiderPane;
