import './banner.css'
import { bannerData } from './bannerData';

export const Banner = () => {

    const {img, alt, span, text, whatsapp} = bannerData;

    return (
    <>
    <section className="banner">
    <div className='banner__grid'>

        <article className='banner__image'>
            <div className='banner__image--background'>
                <img className='banner__image--src' src={img} alt={alt}/>
            </div>
        </article>

        <article className='banner__data'>
            <span className='banner__data--span'>{span}</span>
            <p className='banner__data--text'>{text}</p>
            <a className='banner__data--whatsapp' href={whatsapp.href}>
                        {whatsapp.text}
                    </a>
        </article>
    </div>

    </section>

    </>
    )
}