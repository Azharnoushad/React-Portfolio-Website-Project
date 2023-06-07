import React from "react";
import home1 from "../img/home1.png";
// styles----------------------------------------------------------------
import { About, Description, Image, Hide } from "../Style";
// framer motion --------------------------------
import { motion } from "framer-motion";
import { titleAnimation } from "./Animation";
import { fadeAnimation } from "./Animation";
import { imgAnimation } from "./Animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>come true.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fadeAnimation}>
          Contact us for any photograpghy or videography ideas that you have. We
          have proffessionals with amazing skills
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={imgAnimation} src={home1} alt="guy with the camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
