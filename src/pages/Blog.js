import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { client } from "../client";
import BlogItem from "../components/Blog/BlogItem";
import { Logo, HomeButton, SocialIcons, Anchor } from "../components/commons";
import BigTitle from "../components/commons/BigTitle";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
`;

const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.8)`};
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
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

const Blog = () => {
  const [blogs, setBlogs] = useState(null);
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));

    const query = '*[_type == "post"]';
    client.fetch(query).then((data) => setBlogs(data));
  }, []);

  return (
    <MainContainer>
      <Container>
        <Logo />
        <HomeButton />
        <SocialIcons />
        <Anchor numbers={numbers} />
        {blogs && (
          <Center
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <Grid>
              {blogs.map((blog) => (
                <BlogItem key={blog._id} blog={blog} />
              ))}
            </Grid>
          </Center>
        )}
        <BigTitle text="blog" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default Blog;
