import './services.css'
import banner from './service-banner.png'
import { Service01 } from './servicesList/Service01'
import { Service02 } from './servicesList/Service02'
import { Service03 } from './servicesList/Service03'
import { Service04 } from './servicesList/Service04'
import { Service05 } from './servicesList/Service05'
import { Service06 } from './servicesList/Service06'
import { Service } from './servicesList/Service'

export const Services = () => {
    return (
    <>
        <section className="services" id="services">
            <span className="services--span">Nuestros servicios</span>
            <h2 className="services--title">Con la mejor calidad posible</h2>

        <div className='services__grid'>
            <div className='services__grid__first'>
                <Service/>
                <Service01/>
                <Service02/>
                <Service03/>
            </div>
            <div className='services__grid__image'>
                <img className='services__grid__image--img' src={banner}/>
            </div>
            <div className='services__grid__last'>
                <Service04/>
                <Service05/>
                <Service06/>
            </div>



        </div>

        </section>
    </>
    )
}