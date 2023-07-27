import icon from './img/service-icon-5.png'
import './service.css'

export const Service05 = () => {
    return (
        <>
            <article className="service">



                <div className="service__info">
                    <p className="service__info--title">Pronóstico y prevención</p>
                    <p className="service__info--text">Chequeo dental enfocado en prevenir posibles danos o problemas a futuro.</p>
                </div>

                <div className="service__icon">
                    <img src={icon} className="service__icon--img" />
                </div>

            </article>
        </>
    )
}