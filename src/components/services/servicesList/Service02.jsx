import icon from './img/service-icon-2.png'
import './service.css'

export const Service02 = () => {
    return (
    <>
        <article className="service">

            <div className="service__icon">
                <img src={icon} className="service__icon--img"/>
            </div>

            <div className="service__info">
                <p className="service__info--title">Ortodoncia</p>
                <p className="service__info--text">Tratamiento enfocado en la aplicación de brackets u otros aparatos para enderezar los dientes.</p>
            </div>

        </article>
    </>
    )
}