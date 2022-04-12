import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div id="gallery" className="app__gallery flex__center">
      <div className="app__gallery-content">
        <div style={{ marginBottom: '1rem' }}>
          <p className="p__opensans">Instagram</p>
          <img src="images/spoon.svg" alt="spoon" className="spoon__img" />
        </div>
        <h1 className="headtext">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: '#AAAAAA', marginTop: '2rem' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu. Morbi Sit Amet
          Lacinia Sapien, Id Mattis Neque. Duis Metus.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            'images/gallery01.png',
            'images/gallery02.png',
            'images/gallery03.png',
            'images/gallery04.png',
          ].map((image, index) => (
            <a
              href="https://www.instagram.com/z_pandey_ji/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div
                className="app__gallery-images_card flex__center"
                key={`gallery_image-${index + 1}`}
              >
                <img src={image} alt="gallery_image" />
                <BsInstagram className="gallery__image-icon" />
              </div>
            </a>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
