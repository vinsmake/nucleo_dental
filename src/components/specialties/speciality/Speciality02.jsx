import './speciality.css'
import image from './img/invisalign.jpg'

export const Speciality02 = ({className, background}) => {
    return (
        <>
            <article className="speciality">
                <div className={className}>

                    <div className='speciality__data__head'>
                        <span className='speciality__data__head--span'>
                        Invisalign
                        </span>

                        <h2 className='speciality__data__head--title'>
                        Nos preocupa tu sonrisa.
                        </h2>
                    </div>

                    <div className='speciality__data__body'>
                        <p className='speciality__data__body--text'>
                        ¿No te gustan los brackets? Contamos con una opción más discreta: Invisalign.
                        </p>
                        <p className='speciality__data__body--text'>
                        Invisalign es una alternativa más estética los brackets, su imagen transparente interfiere menos con tu imagen y permiten tomar el tratamiento sin dejar de mostrar tu sonrisa.
                        </p>



                        <a className='speciality__data__body--button' href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!">Pregunta por ellos</a>
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