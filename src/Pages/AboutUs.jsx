import React from "react";
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/ServicesSection";
import FaqSection from "../Components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../Components/Animation";

const AboutUs = () => {
  return (
    <motion.div variants={pageAnimation} animate="show" initial="hidden" exit="exit">
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
