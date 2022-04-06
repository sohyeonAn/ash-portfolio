import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

import Main from "./components/Main";
import About from "./components/About";
import Blog from "./components/Blog";
import Work from "./components/Work";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
