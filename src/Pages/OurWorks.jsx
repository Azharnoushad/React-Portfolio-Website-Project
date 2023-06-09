import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { frame, motion } from "framer-motion";
import {
  fadeAnimation,
  imgAnimation,
  pageAnimation,
  lineAnimation,
  sliderAnimation
} from "../Components/Animation";


const OurWorks = () => {
  return (
    <Work
      variants={pageAnimation}
      animate="show"
      initial="hidden"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Frame1 variants={sliderAnimation}></Frame1>
      <Frame2 variants={sliderAnimation}></Frame2>
      <Frame3 variants={sliderAnimation}></Frame3>
      <Frame4 variants={sliderAnimation}></Frame4>
      <Movie>
        <motion.h2 variants={fadeAnimation}>The Athlete</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={imgAnimation} src={athlete} alt="" />
          </Hide>
        </Link>
      </Movie>

      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="" />
        </Link>
      </Movie>

      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="" />
        </Link>
      </Movie>
     
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;

  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWorks;
