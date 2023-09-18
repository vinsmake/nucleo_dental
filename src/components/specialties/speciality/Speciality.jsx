import './speciality.css'
import { specialitiesData } from '../specialitiesData'

export const Speciality = () => {

    return (
        <>

            {specialitiesData.map((speciality, index) => {


                const { position, src, background } = speciality.img

                return (



                    <article className="speciality" key={index}>

                        {/* head */}
                        <div className='speciality__head'>

                            <span className='speciality__head--span'>
                                {speciality.span}
                            </span>

                            <h2 className='speciality__head--title'>
                                {speciality.title}
                            </h2>
                        </div>

                        {/* data */}
                        <div className={`speciality__data ${position}`}>

                            {/* body */}
                            <section>

                                <div className='speciality__data__body'>
                                    <p className='speciality__data__body--text'>
                                        {speciality.text1}
                                    </p>
                                    <p className='speciality__data__body--text'>
                                        {speciality.text2}
                                    </p>
                                    <a className='speciality__data__body--button' href={speciality.href}>{speciality.btn}</a>
                                </div>

                            </section>

                            {/* image */}
                            <section className='speciality__data__image'>
                                <img className={`speciality__data__image--img ${background}`} src={src}></img>
                            </section>

                        </div>

                    </article>
                )
            })}


        </>
    )
}