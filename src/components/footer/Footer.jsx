import { footerData } from "./footerData"
import './footer.css'

export const Footer = () => {

    const { title, span, leyend, info } = footerData;

    return (
        <>
            <footer className="footer">
                <section className="footer__grid">
                    <article className="footer__grid__section">
                        <h2 className="footer__grid__section--title">{title}</h2>
                        <p className="footer__grid__section--span">{span}</p>
                        <a href={leyend} className="footer__grid__section--text">{leyend}</a>
                    </article>

                    <article className="footer__grid__section">
                        {info.map((mapedInfo, index) => {
                            return (
                                <li key={index} className="footer__grid__section__info">
                                    <a href={mapedInfo.href} className="footer__grid__section__info--link">
                                        <div className="footer__grid__section__info--img">
                                            <img src={mapedInfo.icon} className="footer__grid__section__info--src" />
                                        </div>
                                        <p className="footer__grid__section__info--leyend">{mapedInfo.leyend}</p>
                                    </a>
                                </li>
                            )
                        })}
                    </article>

                </section>
            </footer>
        </>
    )
}