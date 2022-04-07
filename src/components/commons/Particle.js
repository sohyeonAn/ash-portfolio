import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";

import lightParticle from "../../config/circle-particle-light-config.json";
import darkParticle from "../../config/circle-particle-dark-config.json";
const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;
const Particle = (props) => {
  return (
    <Box>
      <Particles
        style={{ position: "absolute", top: 0 }}
        options={props.theme === "light" ? darkParticle : lightParticle}
      />
      );
    </Box>
  );
};

export default Particle;
