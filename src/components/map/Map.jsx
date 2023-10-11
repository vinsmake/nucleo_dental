import './map.css'
import { mapData } from './mapData.js'

export const Map = () => {

    const {map, span, title, data} = mapData;

    return (
        <>
            <section className="map" id='ubicacion'>
                <article className='map__data'>
                    <span className='map__data--span'>{span}</span>
                    <h1 className='map__data--title'>{title}</h1>
                </article>

                <section className='map__container'>

                    <article className="map__frame">
                        <iframe class="map__frame--frame" src={map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </article>



                    <article className="map__data__data">
                    <p className='map__data__data--text'>{data.text}</p>
                    </article>

                </section>


            </section>
        </>
    )
}