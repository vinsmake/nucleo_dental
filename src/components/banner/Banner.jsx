import './banner.css'
import { bannerData } from './bannerData';

export const Banner = () => {

    const {img, alt} = bannerData;

    return (
    <>
    <section className="banner">
    <div className='banner__grid'>

        <article className='banner__image'>
            <div className='banner__image--background'>
                <img className='banner__image--src' src={img} alt={alt}>

                </img>
            </div>

        </article>

        <article className='banner__data'>

        </article>
    </div>

    </section>

    </>
    )
}