import './hero.css'
import { headerData } from '../headerData.js'

export const Hero = () => {

    const {banner, span, title, text, heroBtn} = headerData.heroData;
    return (
        <section className="hero">
            <article className="hero__data">
                <div className="hero__data__info">

                    <span class="hero__data__info--span">{span}</span>

                    <h2 class="hero__data__info--title">{title}</h2>

                    <p class="hero__data__info--text">
                        {text}
                    </p>

                    <a href={heroBtn.href} class="hero__data__info--button">{heroBtn.text} </a>

                </div>

                <div className="hero__data__image">
                    <img className='hero__data__image--img' src={banner} alt="dr-logo" />
                </div>

            </article>
        </section>
    )
}