import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { urlFor } from "../../client";

const Box = styled(NavLink)`
  width: calc(10rem + 15vw);
  text-decoration: none;
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 50em) {
    width: 60vw;
  }
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.h3`
  color: inherit;
  padding: 1rem 0 0.5rem;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
`;

const Tag = styled.span`
  padding-right: 0.5rem;
`;

const DateBox = styled.span`
  padding: 0.5rem 0;
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

const BlogItem = ({ blog }) => {
  const { title, publishedAt, mainImage, tags } = blog;
  return (
    <motion.div variants={item}>
      <Box to="/">
        {mainImage && <Image img={urlFor(mainImage)} />}
        <Title>{title}</Title>
        <HashTags>
          {tags && tags.map((tag, idx) => <Tag key={idx}>#{tag}</Tag>)}
        </HashTags>
        <DateBox>
          {publishedAt && new Date(publishedAt).toLocaleDateString()}
        </DateBox>
      </Box>
    </motion.div>
  );
};

export default BlogItem;
