import icon from './img/service-icon-1.png'
import './service.css'

export const Service01 = () => {
    return (
    <>
        <article className="service">

            <div className="service__icon">
                <img src={icon} className="service__icon--img"/>
            </div>

            <div className="service__info">
                <p className="service__info--title">Periodoncia</p>
                <p className="service__info--text">Tratamientos enfocados en las encías y zonas alrededor de los dientes.</p>
            </div>

        </article>
    </>
    )
}