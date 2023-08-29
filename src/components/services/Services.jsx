import './services.css'
import banner from './service-banner.png'
import { Service } from './servicesList/Service'

export const Services = () => {
    return (
    <>
        <section className="services" id="services">
            <span className="services--span">Nuestros servicios</span>
            <h2 className="services--title">Con la mejor calidad posible</h2>

        <div className='services__grid' style={{ backgroundImage: `url(${banner})` }}>
            <div className='services__grid__services'>
                <Service/>
            </div>
        </div>

        </section>
    </>
    )
}