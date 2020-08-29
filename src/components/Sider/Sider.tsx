import React, { useState } from "react";
import { GithubFilled } from "@ant-design/icons";
import styled from "styled-components";
import SiderPane from "./SiderPane";

export interface SiderPaneStyledProps {
  isActive?: boolean;
}

const Sider = () => {
  const [currentMenu, setCurrentMenu] = useState({ iconType: "", label: "" });
  const [isActive, setIsActive] = useState(false);
  const [isGithubIconMouseOver, setIsGithubIconMouseOver] = useState(false);
  //   const [menus, setMenus] = useState([]);

  const handleGithubClick = () => {
    window.open(`https://github.com/Mordiumaco/react-canvas-work1`);
  };

  //   const handleSideToggle = (menu) => {
  //     const { isActive, curMenu } = this.state;

  //     if (curMenu.label === "" || !isActive) {
  //       this.setState({ isActive: !isActive, curMenu: menu });
  //       return;
  //     }

  //     isActive && menu.label === curMenu.label
  //       ? this.setState({ isActive: !isActive })
  //       : this.setState({ curMenu: menu });
  //   };

  return (
    <>
      <SideTabStyled isActive={isActive}>
        <SiderPane isActive={isActive} setIsActive={setIsActive} />
        <GithubFilled
          onClick={handleGithubClick}
          onMouseEnter={() => {
            setIsGithubIconMouseOver(true);
          }}
          onMouseLeave={() => {
            setIsGithubIconMouseOver(false);
          }}
          style={{
            fontSize: "20px",
            color: isGithubIconMouseOver ? "#000" : "#eee",
            transitionProperty: "color",
            transitionDuration: "0.5s",
            transitionTimingFunction: "ease-in-out",
          }}
        />
      </SideTabStyled>
    </>
  );
};

export default Sider;

const SideTabStyled = styled.div<SiderPaneStyledProps>`
  position: fixed;
  left: ${(props) => (props.isActive ? "-40px" : "0px")};
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #393f4c;
  transition-property: left;
  transition-timing-function: ease-in-out;
  transition-duration: 0.5s;
  width: 40px;
  height: 100%;
  z-index: 100;
`;
