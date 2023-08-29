import { servicesData } from '../servicesData'
import { Modal } from './Modal';
import { ModalComponent } from './ModalComponent';
import './service.css'


export const Service = () => {

    const { servicesList } = servicesData;

    return (
        <>

            {servicesList.map((service, index) => {
                return (
                    <article className="service" key={index}>

                        <div className="service__icon">
                            <img src={service.img} className="service__icon--img" />
                        </div>

                        <div className="service__info">
                            <p className="service__info--title">{service.title}</p>
                            <p className="service__info--text">{service.text}</p>
                        </div>

                        <ModalComponent/>

                    </article>
                )
            })}

        </>
    )
}