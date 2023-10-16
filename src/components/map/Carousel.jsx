import './carousel.css'
import { carouselData } from './carouselData.js'








export const Carousel = () => {

  const { images } = carouselData;

  return (

    <>
    <section className='carousel'>
    {/* We tell here what to do with every image */}
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img /* onClick={changeImage} */ src={image.href}/>
          </div>
        )
      })}
      </section>
    </>
  );
}