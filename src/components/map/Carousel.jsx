import './carousel.css'

import React, { useState, useCallback } from 'react';

const Carousel = () => {
  const [activePos, setActivePos] = useState(0);

  const carouselItems = [
    { pos: -2, text: '1' },
    { pos: -1, text: '2' },
    { pos: 0, text: '3' },
    { pos: 1, text: '4' },
    { pos: 2, text: '5' },
  ];

  const update = useCallback((newActivePos) => {
    setActivePos(newActivePos);
  }, []);

  const getPos = (current, active) => {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
      return -current;
    }

    return diff;
  };

  return (
    <div className="carousel">
      <ul className="carousel__list">
        {carouselItems.map((item) => (
          <li
            key={item.pos}
            className={`carousel__item ${item.pos === activePos ? 'carousel__item_active' : ''}`}
            data-pos={item.pos}
            onClick={() => update(item.pos)}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
