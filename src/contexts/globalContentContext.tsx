import React, { createContext, useState, useContext } from "react";

const GlobalContentContext = createContext({
  state: {
    text: "",
    fontSize: "",
    fontFamily: "",
  },
  actions: {
    setText: (text: string): void => {},
    setFontSize: (fontSize: string): void => {},
    setFontFamily: (fontFamily: string): void => {},
  },
});

const GlobalContentsProvider = ({ children }) => {
  const [text, setText] = useState("Sample Text");
  const [fontSize, setFontSize] = useState("40");
  const [fontFamily, setFontFamily] = useState("Helvetica");

  const value = {
    state: { text, fontSize, fontFamily },
    actions: { setText, setFontSize, setFontFamily },
  };

  return (
    <GlobalContentContext.Provider value={value}>
      {children}
    </GlobalContentContext.Provider>
  );
};

const useGlobalContents = () => useContext(GlobalContentContext);

export { GlobalContentsProvider, useGlobalContents };
