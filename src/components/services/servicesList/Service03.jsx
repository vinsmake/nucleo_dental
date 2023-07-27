import icon from './img/service-icon-3.png'
import './service.css'

export const Service03 = () => {
    return (
    <>
        <article className="service">

            <div className="service__icon">
                <img src={icon} className="service__icon--img"/>
            </div>

            <div className="service__info">
                <p className="service__info--title">Prótesis dentales</p>
                <p className="service__info--text">Dispositivos soportados por tejidos que remplazan los dientes perdidos.</p>
            </div>

        </article>
    </>
    )
}