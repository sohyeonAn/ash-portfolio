import React from "react";
import styled from "styled-components";
import { ImGithub } from "react-icons/im";
import { motion } from "framer-motion";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;

  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;
const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  a {
    cursor: pointer;
  }
  a:first-child {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    border-radius: 0 0 0 50px;
    font-size: calc(1em + 0.5vw);

    ${Box}:hover & {
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
    }
  }

  a:last-child {
    color: ${(props) => props.theme.body};
    text-decoration: none;
    svg {
      width: 30px;
      height: 30px;
    }

    ${Box}:hover & {
      & > * {
        color: ${(props) => props.theme.text};
      }
    }
  }
`;

// framer-motion config
const item = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const WorkItem = ({ data }) => {
  const { _id, title, description, tags, projectLink, codeLink } = data;
  return (
    <Box key={_id} variants={item}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Tags>{tags && tags.map((t, idx) => <Tag key={idx}>#{t}</Tag>)}</Tags>
      <Footer>
        <a href={projectLink} target="_blank" rel="noreferrer">
          Visit
        </a>
        <a href={codeLink} target="_blank" rel="noreferrer">
          <ImGithub />
        </a>
      </Footer>
    </Box>
  );
};

export default WorkItem;
