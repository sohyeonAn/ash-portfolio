import React from "react";
import styled from "styled-components";
import { ImGithub, ImTwitter } from "react-icons/im";

import { darkTheme } from "../Themes";

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
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.theme === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <a href="https://github.com/sohyeonAn" target="_blank" rel="noreferrer">
          <ImGithub
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </div>
      <div>
        <a href="https://github.com/sohyeonAn" target="_blank" rel="noreferrer">
          <ImTwitter
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </a>
      </div>
      <Line theme={props.theme} />
    </Icons>
  );
};

export default SocialIcons;
