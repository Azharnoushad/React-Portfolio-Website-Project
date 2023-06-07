import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation } from "../Components/Animation";

const ConatctUs = () => {
  return (
    <ContactConatiner
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>ConatctUs</h1>
    </ContactConatiner>
  );
};

const ContactConatiner = styled(motion.div)`
  color: #fff;
`;

export default ConatctUs;
