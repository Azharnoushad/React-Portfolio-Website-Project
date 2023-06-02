import React from "react";
import home1 from "../img/home1.png";
// styles----------------------------------------------------------------
import {About,Description,Image,Hide} from "../Style"

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide >
            <h2>We work to make</h2>
          </Hide>
          <Hide className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide className="hide">
            <h2>come true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photograpghy or videography ideas that you have. We
          have proffessionals with amazing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with the camera" />
      </Image>
    </About>
  );
};



export default AboutSection;
