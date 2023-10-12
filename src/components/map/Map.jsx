import './map.css'
import { mapData } from './mapData.js'

export const Map = () => {

    const {map, span, title, text, data} = mapData;

    return (
        <>
            <section className="map" id='ubicacion'>
                <article className='map__data'>
                    <span className='map__data--span'>{span}</span>
                    <h1 className='map__data--title'>{title}</h1>
                    <p className='map__data--text'>{text}</p>
                </article>

                <section className='map__container'>

                    <article className="map__frame">
                        <iframe class="map__frame--frame" src={map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </article>



                    <article className="map__data__data">

                    </article>

                </section>


            </section>
        </>
    )
}