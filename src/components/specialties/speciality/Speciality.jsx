import './speciality.css'
import image from './img/diana-polekhina.png'

export const Speciality = () => {
    return (
    <>
        <article className="speciality">
            <div className='speciality__image'>
            <img className='speciality__image--img' src={image}></img>
            </div>
            <div className='speciality__data'>xd</div>
        </article>
    </>
    )
}