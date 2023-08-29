import './speciality.css'
import { specialitiesData } from '../specialitiesData'

export const Speciality = () => {

    return (
        <>

            {specialitiesData.map((speciality, index) => {
                return (

                    <article className="speciality" key={index}>
                    <div className={speciality.position}>
    
                        <div className='speciality__data__head'>
                            <span className='speciality__data__head--span'>
                                {speciality.span}
                            </span>
    
                            <h2 className='speciality__data__head--title'>
                                {speciality.title}
                            </h2>
                        </div>
    
                        <div className='speciality__data__body'>
                            <p className='speciality__data__body--text'>
                                {speciality.text1}
                            </p>
                            <p className='speciality__data__body--text'>
                                {speciality.text2}
                            </p>
    
    
    
                            <a className='speciality__data__body--button' href={speciality.href}>Conoce iTero</a>
                        </div>
    
    
                        <div className='speciality__data__image'>
                            <div className='speciality__data__image'>
                                <img className={`speciality__data__image--img ${speciality.background}`} src={speciality.img}></img>
                            </div>
                        </div>
    
                    </div>
                </article>
                )
            })}


        </>
    )
}