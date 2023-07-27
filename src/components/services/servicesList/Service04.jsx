import icon from './img/service-icon-4.png'
import './service.css'

export const Service04 = () => {
    return (
        <>
            <article className="service">



                <div className="service__info">
                    <p className="service__info--title">Blanqueamiento dental</p>
                    <p className="service__info--text">Limpieza de esmalte que recupera el color original de los dientes.</p>
                </div>

                <div className="service__icon">
                    <img src={icon} className="service__icon--img" />
                </div>

            </article>
        </>
    )
}