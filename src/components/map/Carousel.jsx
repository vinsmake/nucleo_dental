import { useState } from 'react';
import './carousel.css'
import xd from './xd.jpg'
import xd2 from './xd2.jpg'
import xd3 from './xd3.jpg'
import { useRef } from 'react';


const images = [
    xd,
    xd2,
    xd3,
  ];


export const Carousel = () => {

    const [currentImage, setCurrentImage] = useState(0);
    const touchStartX = useRef(null);
  
    const prevImage = () => {
      setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  
    const nextImage = () => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
  
    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };
  
    const handleTouchEnd = (e) => {
      if (touchStartX.current === null) {
        return;
      }
  
      const touchEndX = e.changedTouches[0].clientX;
      const difference = touchStartX.current - touchEndX;
  
      if (difference > 30) {
        nextImage();
      } else if (difference < -30) {
        prevImage();
      }
  
      touchStartX.current = null;
    };
  
    return (
      <div
        className="carousel"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="nav-button prev" onClick={prevImage}>
          &lt;
        </button>
        <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        <button className="nav-button next" onClick={nextImage}>
          &gt;
        </button>
      </div>
    );
}