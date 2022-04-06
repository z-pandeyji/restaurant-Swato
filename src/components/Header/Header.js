import React from "react";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <div style={{ marginBottom: '1rem' }}>
        <p className="p__opensans">Chase the new flavour</p>
        <img src="images/spoon.svg" alt="spoon" className="spoon__img" />
      </div>
      <h1 className="app__header-h1">Order Your Favourite Food</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae
        tincidunt massa. Mauris nibh tortor, vehicula eu ornare sit amet, porta
        imperdiet ligula. Praesent turpis nibh, placerat at lobortis sed,
        scelerisque sed.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src="images/welcome.png" alt="header img" />
    </div>
  </div>
);

export default Header;
