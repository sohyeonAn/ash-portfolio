import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";

import { client } from "../client";
import { HomeButton, Logo, SocialIcons } from "../components/commons";
import { Dog } from "../components/commons/AllSvgs";
import { darkTheme } from "../components/Themes";
import WorkItem from "../components/Work/WorkItem";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  height: ${(props) => `${props.length * 50}vh`};
  position: relative;
  overflow: hidden;
`;

const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: #fff;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;
const Work = () => {
  const [works, setWorks] = useState([]);
  const ref = useRef(null);
  const dog = useRef(null);

  useEffect(() => {
    const query = '*[_type == "project"]';
    client.fetch(query).then((data) => setWorks(data));

    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.scrollY}px)`;
      dog.current.style.transform = `rotate(${window.scrollY}deg)`;
    };
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>
      <Box length={works.length}>
        <Logo theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton />
        <Main ref={ref}>
          {works &&
            works.map((work) => <WorkItem key={work._id} data={work} />)}
        </Main>
        <Rotate ref={dog}>
          <Dog width={80} height={80} fill={darkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default Work;
