import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { ThemeProvider } from "styled-components";

import { client, ContentBlock } from "../client";
import { HomeButton, Logo, SocialIcons } from "../components/commons";
import Particle from "../components/commons/Particle";
import { darkTheme } from "../components/Themes";
import astronaut from "../assets/images/spaceman.png";
import BigTitle from "../components/commons/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;
const float = keyframes`
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translate(15px, 15px);
  }
  100% {
    transform: translateY(-10px);
  }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  div {
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: calc(0.4rem + 1vw);
    backdrop-filter: blur(4px);

    strong {
      font-size: 1.3em;
      padding: 0 0.4rem;
    }
  }

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
`;
const About = () => {
  const [about, setAbout] = useState(null);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client
      .fetch(query)
      .then((data) => {
        console.log(data[0]);
        setAbout(data[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <Logo theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton />
        <Particle theme="dark" />
        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>{about && <ContentBlock content={about.description} />}</Main>
        <BigTitle text="about" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default About;
