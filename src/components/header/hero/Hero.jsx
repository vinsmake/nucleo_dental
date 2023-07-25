import './hero.css'

export const Hero = () => {
    return (
        <section className="hero">
            <article className="hero__data">
                <div className="hero__data__info">

                    <span class="hero__data__info--span">En Núcleo Dental</span>

                    <h2 class="hero__data__info--title">Cuidamos tu sonrisa</h2>

                    <p class="hero__data__info--text">
                        En Núcleo Dental somos un equipo de cirujanos dentistas, con una amplia experiencia, que se mantiene al
                        día con los tratamientos dentales y el uso de la tecnología para darte el mejor diagnóstico y tratamiento
                        para tu salud.
                    </p>

                    <a href="https://api.whatsapp.com/send?phone=523329147808&amp;text=%C2%A1Hola%20N%C3%BAcleo%20Dental!" class="hero__data__info--button">Solicitar cotización por WhatsApp</a>

                </div>

                <div className="hero__data__image">


                </div>

            </article>
        </section>
    )
}