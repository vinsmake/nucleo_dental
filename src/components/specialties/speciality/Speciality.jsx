import './speciality.css'
import image from './img/itero-hand.png'

export const Speciality = () => {
    return (
        <>
            <article className="speciality">
                <div className='speciality__data'>
                    <span className='speciality__data--span'>
                        HELLO, I'M ITERO
                    </span>

                    <h2 className='speciality__data--title'>
                        En Núcleo Dental contamos con la tecnología iTero
                    </h2>

                    <p className='speciality__data--text'>
                        iTero es una herramienta eficaz que proporciona visualizaciones muy realistas del aspecto que podría tener tu sonrisa tras el tratamiento.
                    </p>
                    <p className='speciality__data--text'>
                    iTero es el primer sistema híbrido de imagen dental que registra imágenes 3D en simultáneo sin exposición a radiación, ayudando a detectar caries en las zonas más inaccesibles, descubriendo cambios y lesiones en el esmalte dental, y simulando el resultado de su respectivo tratamiento.
                    </p>

                    <a className='speciality__data--button' href="https://www.youtube.com/watch?v=gSPlAW44bXQ&amp;ab_channel=iTeroScanner">Conoce iTero</a>
                </div>

                <div className='speciality__image'>
                    <img className='speciality__image--img' src={image}></img>
                </div>
            </article>
        </>
    )
}