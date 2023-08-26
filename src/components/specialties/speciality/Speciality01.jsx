import './speciality.css'
import image from './img/itero-hand.png'

export const Speciality01 = ({className, background}) => {
    return (
        <>
            <article className="speciality">
                <div className={className}>

                    <div className='speciality__data__head'>
                        <span className='speciality__data__head--span'>
                            HELLO, I'M ITERO
                        </span>

                        <h2 className='speciality__data__head--title'>
                            En Núcleo Dental contamos con la tecnología iTero
                        </h2>
                    </div>

                    <div className='speciality__data__body'>
                        <p className='speciality__data__body--text'>
                            iTero es una herramienta eficaz que proporciona visualizaciones muy realistas del aspecto que podría tener tu sonrisa tras el tratamiento.
                        </p>
                        <p className='speciality__data__body--text'>
                            iTero es el primer sistema híbrido de imagen dental que registra imágenes 3D en simultáneo sin exposición a radiación, ayudando a detectar caries en las zonas más inaccesibles, descubriendo cambios y lesiones en el esmalte dental, y simulando el resultado de su respectivo tratamiento.
                        </p>



                        <a className='speciality__data__body--button' href="https://www.youtube.com/watch?v=gSPlAW44bXQ&amp;ab_channel=iTeroScanner">Conoce iTero</a>
                    </div>

                
                <div className='speciality__data__image'>
                    <div className='speciality__data__image'>
                        <img className={`speciality__data__image--img ${background}`} src={image}></img>
                    </div>
                </div>

                </div>
            </article>
        </>
    )
}