import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/images/me.png";

const Box = styled(motion.div)`
  width: 50vw;
  display: flex;

  position: absolute;
  top: 50%;
  left: 50%;
  right: 0;
  transform: translate(-50%, -50%);

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};
  z-index: 1;

  @media screen and (max-width: 50em) {
    flex-direction: column;
    justify-content: space-between;
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      ),
      linear-gradient(
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    width: 85%;
    height: auto;
  }

  @media screen and (max-width: 50em) {
    width: 100%;
    height: 50%;
    .pic {
      width: 70%;
    }
  }
`;

const Text = styled.div`
  font-size: calc(0.6rem + 0.8vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
    font-size: 0.9em;
  }
`;
const Intro = () => {
  const [height, setHeight] = useState("50vh");
  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("60vh");
    }
  }, []);
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "ease", duration: 1, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>안녕하세요 !</h1>
          <h3>프론트엔드 개발자를 꿈꾸는 안소현입니다.</h3>
          <h6>저의 작고 소중한 결과물들이 있는 공간에 오신 것을 환영합니다.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ type: "spring", duration: 0.5, delay: 2 }}
        >
          <img className="pic" src={Me} alt="프로필 사진" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
