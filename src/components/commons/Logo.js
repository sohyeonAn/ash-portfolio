import React from "react";
import styled from "styled-components";
import { darkTheme } from "../Themes";
const LogoStyle = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.theme === "dark" ? darkTheme.text : darkTheme.body};
  font-family: "Courier New", Courier, monospace;

  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;
const Logo = (props) => {
  return <LogoStyle theme={props.theme}>ASH</LogoStyle>;
};

export default Logo;
