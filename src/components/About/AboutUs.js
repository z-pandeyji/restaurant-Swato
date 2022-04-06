import React from "react";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext">About Us</h1>
        <img src="images/spoon.svg" alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
          blandit quam. Phasellus rhoncus, nunc non bibendum accumsan, lectus
          arcu iaculis odio, eu hendrerit massa sapien sit amet dolor. Nullam
          ipsum urna, dapibus eu pulvinar sit amet, efficitur sit amet tortor.
          Fusce semper non ante vel condimentum.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src="images/knife.png" alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext">Our History</h1>
        <img src="images/spoon.svg" alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac
          blandit quam. Phasellus rhoncus, nunc non bibendum accumsan, lectus
          arcu iaculis odio, eu hendrerit massa sapien sit amet dolor. Nullam
          ipsum urna, dapibus eu pulvinar sit amet, efficitur sit amet tortor.
          Fusce semper non ante vel condimentum.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
