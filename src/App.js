import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

import Main from "./pages/Main";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/work" element={<Work />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default App;
