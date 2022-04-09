import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import { HomeButton, Logo, SocialIcons } from "../components/commons";
import { Dog } from "../components/commons/AllSvgs";
import Intro from "../components/Intro";
import { mediaQueries } from "../components/Themes";

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
    font-family: "Hahmlet", sans-serif;
  }

  h2 {
    ${mediaQueries(40)`
      font-size: 1.2em;
    `};

    ${mediaQueries(30)`
      font-size: 1em;
    `}
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

  @media screen and (max-width: 50em) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }
`;
const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(0, -50%);
  text-decoration: none;
  z-index: 1;

  @media screen and (max-width: 50em) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    text-shadow: ${(props) =>
      props.click ? `0 0 4px ${props.theme.text}` : "none"};
  }
`;
const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: rotate(-90deg) translate(0, -50%);
  text-decoration: none;
  z-index: 1;

  @media screen and (max-width: 50em) {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
    text-shadow: ${(props) =>
      props.click ? `0 0 4px ${props.theme.text}` : "none"};
  }
`;
const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;

  @media screen and (max-width: 50em) {
    color: ${(props) => props.theme.text};
  }
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
  top: ${(props) => (props.click ? "90%" : "50%")};
  left: ${(props) => (props.click ? "95%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.text};
  transition: all 0.7s ease-in-out;

  svg {
    fill: ${(props) => props.theme.text};
    width: ${(props) => (props.click ? "100px" : "250px")};
    height: ${(props) => (props.click ? "100px" : "250px")};

    @media screen and (max-width: 50em) {
      width: ${(props) => (props.click ? "80px" : "150px")};
      height: ${(props) => (props.click ? "80px" : "150px")};
    }
  }

  & > *:first-child {
    animation: ${rotate} infinite 5s linear;
  }
  & > *:last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  @media screen and (max-width: 50em) {
    top: ${(props) => (props.click ? "90%" : "50%")};
    left: ${(props) => (props.click ? "90%" : "50%")};
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  z-index: 1;

  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};

  background-color: ${(props) => props.theme.text};

  transition: height 0.5s ease, width 1s ease 0.5s;

  ${(props) =>
    props.click
      ? mediaQueries(50)`
    width: 100%;
    height: 50%;
    right: 0;
    transition: width 0.5s ease, height 1s ease 0.5s;
  `
      : mediaQueries(50)`
    width: 0;
    height: 0;
  `}
`;
const Main = (props) => {
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
          click={click ? 1 : 0}
          href="mailto:ansh4393@gmail.com"
          target="_blank"
          rel="referrer"
        >
          <motion.h2
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTab={{ scale: 0.9 }}
          >
            Contact
          </motion.h2>
        </Contact>
        <Blog to="/blog" click={click ? 1 : 0}>
          <motion.h2
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTab={{ scale: 0.9 }}
          >
            Blog
          </motion.h2>
        </Blog>
        <Work to="/work" click={click ? 1 : 0}>
          <motion.h2
            initial={{
              y: -200,
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTab={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </Work>
        <BottomBar>
          <About to="/about" click={click ? 1 : 0}>
            <motion.h2
              initial={{
                y: 200,
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTab={{ scale: 0.9 }}
            >
              About.
            </motion.h2>
          </About>
          <Skills to="/skills">
            <motion.h2
              initial={{
                y: 200,
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTab={{ scale: 0.9 }}
            >
              Skills.
            </motion.h2>
          </Skills>
        </BottomBar>
      </Container>
      {click && <Intro click={click} />}
    </MainContainer>
  );
};

export default Main;
