import { useState } from 'react';
import './carousel.css'
import { carouselData } from './carouselData.js'








export const Carousel = () => {

  const { images } = carouselData;

  const [Image, setImage ] = useState(0);

  return (
    <>
      <section className='carousel'>

        <div className='carousel__image__main'>
          <img className='carousel__image__main--src' src={images[Image].href} />
        </div>

        <div className='carousel__image__select'>
          <article className='carousel__image__select--option' onClick={()=>setImage(0)}>
            <img className='carousel__image__select--option--src' src={images[0].href} />
          </article>
          <article className='carousel__image__select--option' onClick={()=>setImage(1)}>
            <img className='carousel__image__select--option--src' src={images[1].href} />
          </article>
          <article className='carousel__image__select--option' onClick={()=>setImage(2)}>
            <img className='carousel__image__select--option--src' src={images[2].href} />
          </article>
        </div>

      </section>
    </>
  );
}