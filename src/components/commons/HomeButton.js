import React from "react";
import { lightTheme } from "../Themes";
import { BiHomeHeart } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: #fff;
  padding: 0.3rem;
  border: none;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  cursor: pointer;

  &:hover {
    border: 3px solid ${lightTheme.text};
  }

  & > *:first-child {
    color: inherit;
  }
  svg {
    fill: ${lightTheme.text};
    width: 30px;
    height: 30px;
  }
`;
const HomeButton = () => {
  return (
    <Home>
      <NavLink to="/">
        <BiHomeHeart />
      </NavLink>
    </Home>
  );
};

export default HomeButton;
