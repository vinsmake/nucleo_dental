import './services.css'
import { Service01 } from './servicesList/Service01'

export const Services = () => {
    return (
    <>
        <section className="services" id="services">
            <span className="services--span">Nuestros servicios</span>
            <h2 className="services--title">Con la mejor calidad posible</h2>

        <div className='services__grid'>
            <div className='services__grid__first'>
                <Service01/>
            </div>
            <div className='services__grid__image'>

            </div>
            <div className='services__grid__last'>

            </div>



        </div>

        </section>
    </>
    )
}