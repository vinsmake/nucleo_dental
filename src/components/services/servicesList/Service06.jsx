import icon from './img/service-icon-6.png'
import './service.css'

export const Service06 = () => {
    return (
        <>
            <article className="service">



                <div className="service__info">
                    <p className="service__info--title">Carillas dentales</p>
                    <p className="service__info--text">Procesos restaurativos que enmascaran la superficie de los dientes para corregir o proteger de posibles danos.</p>
                </div>

                <div className="service__icon">
                    <img src={icon} className="service__icon--img" />
                </div>

            </article>
        </>
    )
}