import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { client } from "../client";
import BlogItem from "../components/Blog/BlogItem";
import { Logo, HomeButton, SocialIcons, Anchor } from "../components/commons";

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

const Center = styled.div`
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

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
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
        <Center>
          <Grid>
            {blogs &&
              blogs.map((blog) => <BlogItem key={blog._id} blog={blog} />)}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default Blog;
