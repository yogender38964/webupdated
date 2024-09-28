// src/components/Slider.js
import React, { useEffect, useRef } from 'react';
import '../css/clientsList.css';

// Import local images
import image1 from '../Image/ClientImages/nestle.avif';
import image2 from '../Image/ClientImages/mahle.svg';
import image3 from '../Image/ClientImages/bhopal-gelatines.jpg';
import image4 from '../Image/ClientImages/Dalmia.png';
import image5 from '../Image/ClientImages/kerry.png';
import image6 from '../Image/ClientImages/jsl.jpg';
import image7 from '../Image/ClientImages/Marino.png';
import image8 from '../Image/ClientImages/johnson-matthey.png';
import image9 from '../Image/ClientImages/lotte.jpg';
import image10 from '../Image/ClientImages/fresco.png';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

const ClientsList = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let startPosition = 0;

    const scroll = () => {
      startPosition -= 1; // Adjust this value to change the speed
      slider.style.transform = `translateX(${startPosition}px)`;

      if (Math.abs(startPosition) >= slider.scrollWidth / 2) {
        startPosition = 0; // Reset position to create seamless effect
      }

      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(scroll);
  }, []);

  return (
    <section className="support-section">
      <div className="container">
        <h1>Transforming the World's Leading Companies</h1>
        <div className="slider">
          <div className="slider-wrapper" ref={sliderRef}>
            <div className="slider-images">
              {images.concat(images).map((image, index) => (
                <div className="slider-item" key={index}>
                  <img src={image} alt={`Client ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsList;
