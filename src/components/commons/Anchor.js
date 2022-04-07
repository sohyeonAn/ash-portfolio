import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ArrowDown, Chain, Dog, DotLine, Hedge, Link, Spring } from "./AllSvgs";
const Container = styled.div`
  position: relative;
`;

const Slider = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);

  .chain {
    transform: rotate(130deg);
  }
`;

const PreDisplay = styled.div`
  position: fixed;
  top: 0;
  right: 2rem;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const Anchor = (props) => {
  const ref = useRef(null);
  const hiddenRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.floor(bodyHeight - (scrollPosition + windowSize));
      //diff*100/scrollposition
      let diffP = (diff * 100) / (bodyHeight - windowSize);

      ref.current.style.transform = `translateY(${-diffP}%)`;

      if (window.pageYOffset > 5) {
        hiddenRef.current.style.display = "none";
      } else {
        hiddenRef.current.style.display = "block";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <PreDisplay ref={hiddenRef} className="hidden">
        <Dog width={70} height={70} />
      </PreDisplay>
      <Slider ref={ref}>
        {[...Array(props.numbers)].map((x, idx) => (
          <Chain key={idx} width={25} height={25} className="chain" />
        ))}
        <Dog width={70} height={70} />
      </Slider>
    </Container>
  );
};

export default Anchor;
