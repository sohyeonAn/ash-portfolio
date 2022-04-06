import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ImGithub, ImTwitter } from "react-icons/im";

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
  background-color: ${(props) => props.theme.text};
`;

const SocialIcons = () => {
  return (
    <Icons>
      <div>
        <a
          style={{ color: "inherit" }}
          href="https://github.com/sohyeonAn"
          target="_blank"
          rel="noreferrer"
        >
          <ImGithub />
        </a>
      </div>
      <div>
        <a
          style={{ color: "inherit" }}
          href="https://github.com/sohyeonAn"
          target="_blank"
          rel="noreferrer"
        >
          <ImTwitter />
        </a>
      </div>
      <Line />
    </Icons>
  );
};

export default SocialIcons;
