import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { client, urlFor } from "../client";
import { HomeButton, Logo, SocialIcons } from "../components/commons";
import Particle from "../components/commons/Particle";
import { lightTheme } from "../components/Themes";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  display: flex;
  flex-direction: column;

  transition: background-color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.7)`};
  }
`;

const Section = styled.section`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h3 {
    font-size: calc(1em + 1vw);
    margin-bottom: 1rem;
  }
  ${Main}:hover & {
    & > * {
    }
  }
`;
const IconBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    width: calc(3em + 2vw);
    height: calc(3em + 2vw);
  }
  span {
    text-align: center;
    font-size: 0.9rem;
  }
`;

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const query = '*[_type == "skills"]';
    client.fetch(query).then((data) => setSkills(data));
  }, []);

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <Logo />
        <SocialIcons theme="light" />
        <HomeButton theme="light" />
        <Particle theme="light" />
        <Main>
          <Section>
            <h3>Frontend</h3>
            <IconBox>
              {skills
                .filter((skill) => skill.type === "frontend")
                .map((skill) => (
                  <Icon key={skill.name}>
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                    <span>{skill.name}</span>
                  </Icon>
                ))}
            </IconBox>
          </Section>
          <Section>
            <h3>Backend</h3>
            <IconBox>
              {skills
                .filter((skill) => skill.type === "backend")
                .map((skill) => (
                  <Icon key={skill.name}>
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                    <span>{skill.name}</span>
                  </Icon>
                ))}
            </IconBox>
          </Section>
        </Main>
        <Main>
          <Section>
            <h3>Database</h3>
            <IconBox>
              {skills
                .filter((skill) => skill.type === "database")
                .map((skill) => (
                  <Icon key={skill.name}>
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                    <span>{skill.name}</span>
                  </Icon>
                ))}
            </IconBox>
          </Section>
          <Section>
            <h3>Tools</h3>
            <IconBox>
              {skills
                .filter((skill) => skill.type === "tool")
                .map((skill) => (
                  <Icon key={skill.name}>
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                    <span>{skill.name}</span>
                  </Icon>
                ))}
            </IconBox>
          </Section>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
