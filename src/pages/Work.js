import React, { useState, useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";

import { client } from "../client";
import { HomeButton, Logo, SocialIcons } from "../components/commons";
import { Dog } from "../components/commons/AllSvgs";
import BigTitle from "../components/commons/BigTitle";
import { darkTheme } from "../components/Themes";
import WorkItem from "../components/Work/WorkItem";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  height: ${(props) =>
    `calc(100vh + (${props.length * 24}rem - 100vw) + 24rem)`};
  position: relative;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: 10rem;
  display: flex;
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

// framer-motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const Work = () => {
  const [works, setWorks] = useState(null);
  const ref = useRef(null);
  const dog = useRef(null);

  useEffect(() => {
    const query = '*[_type == "project"]';
    client
      .fetch(query)
      .then((data) => setWorks(data))
      .catch(console.error);

    let element = ref?.current;
    const rotate = () => {
      if (element) {
        element.style.transform = `translateX(${-window.scrollY}px)`;
        dog.current.style.transform = `rotate(${window.scrollY}deg)`;
      }
    };
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, [works]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box length={works ? works.length : 1}>
        <Logo theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton />
        {works && (
          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {works.map((work) => (
              <WorkItem key={work._id} data={work} />
            ))}
          </Main>
        )}
        <Rotate ref={dog}>
          <Dog width={80} height={80} fill={darkTheme.text} />
        </Rotate>
        <BigTitle text="work" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default Work;
