import React from "react";
import { GlobalContentsProvider } from "./contexts/globalContentContext";
import { Header } from "./components/Header";
import styled from "styled-components";
// import "./assets/scss/reset.scss";
import "./assets/scss/common.scss";
import Sider from "./components/Sider/Sider";

function App() {
  return (
    <GlobalContentsProvider>
      <AppWrapperDiv>
        <Header />
        <Sider />
      </AppWrapperDiv>
    </GlobalContentsProvider>
  );
}

const AppWrapperDiv = styled.div`
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 100;
  text-align: center;
  background: #29293d;
  height: 100%;
`;

export default App;
