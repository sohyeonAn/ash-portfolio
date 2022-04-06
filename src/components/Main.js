import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import HomeButton from "./commons/HomeButton";
import Logo from "./commons/Logo";
import SocialIcons from "./commons/SocialIcons";
import { Dog, Hand, Hedge } from "./commons/AllSvgs";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(0, -50%);
  text-decoration: none;
  z-index: 1;
`;
const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: rotate(-90deg) translate(0, -50%);
  text-decoration: none;
  z-index: 1;
`;
const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{
    transform: rotate(360deg);
  }
`;
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.7s ease-in-out;

  svg {
    width: ${(props) => (props.click ? "100px" : "300px")};
    height: ${(props) => (props.click ? "100px" : "300px")};
  }

  & > :first-child {
    animation: ${rotate} infinite 5s linear;
  }
  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;

  transition: height 0.5s ease, width 1s ease 0.5s;
`;
const Main = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <MainContainer>
      <Container>
        <DarkDiv click={click} />
        <HomeButton />
        <Logo theme={click ? "dark" : "light"} />
        <SocialIcons theme={click ? "dark" : "light"} />
        <Center click={click}>
          <Dog onClick={() => handleClick()} />
          <span>click here</span>
        </Center>

        <Contact
          href="mailto:ansh4393@gmail.com"
          target="_blank"
          rel="referrer"
        >
          <h2>Contact</h2>
        </Contact>
        <Blog to="/blog">
          <h2>Blog</h2>
        </Blog>
        <Work to="/work" click={click}>
          <h2>Work</h2>
        </Work>
        <BottomBar>
          <About to="/about" click={click}>
            <h2>About.</h2>
          </About>
          <Skills to="/skills">
            <h2>Skills.</h2>
          </Skills>
        </BottomBar>
      </Container>
    </MainContainer>
  );
};

export default Main;
