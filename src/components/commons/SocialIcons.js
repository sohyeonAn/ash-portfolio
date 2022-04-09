import React from "react";
import styled from "styled-components";
import { ImGithub } from "react-icons/im";

import { darkTheme, lightTheme } from "../Themes";
import { motion } from "framer-motion";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;
  z-index: 3;

  svg {
    width: 25px;
    height: 25px;
  }

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }

  @media screen and (max-width: 50em) {
    left: 1rem;
    margin: 0.3rem 0;

    svg {
      width: 20px;
      height: 20px;
      fill: ${lightTheme.text};
    }
    & > *:not(:last-child) {
      margin: 0.3rem 0;
    }
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.theme === "dark" ? darkTheme.text : darkTheme.body};

  @media screen and (max-width: 50em) {
    background-color: ${lightTheme.text};
  }
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a href="https://github.com/sohyeonAn" target="_blank" rel="noreferrer">
          <ImGithub
            theme={props.theme}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </motion.div>
      <Line
        theme={props.theme}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
