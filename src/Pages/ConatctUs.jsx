import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  pageAnimation,
  titleAnimation,
  imgAnimation,
  fadeAnimation,
} from "../Components/Animation";

const ConatctUs = () => {
  return (
    <ContactConatiner
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get In Touch.</motion.h2>
        </Hide>
      </Title>
      <motion.div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <motion.h2>Send Us A Message</motion.h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <motion.h2>Send an Emaol</motion.h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <motion.h2>Social Media</motion.h2>
          </Social>
        </Hide>
      </motion.div>
    </ContactConatiner>
  );
};

const ContactConatiner = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: #000;
`;

const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled(motion.div)`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ConatctUs;
