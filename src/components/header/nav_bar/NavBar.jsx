import './navBar.css'

export const NavBar = () => {
    return (
        <>
            <section className='navBar'>
                <nav className='navBar__bar'>
                    <a href='#' className='navBar__bar--logo'>
                        Núcleo Dental
                    </a>

                    <div className='navBar__bar__links'>
                        <ul className='navBar__bar__links__list'>
                            <li>
                                <a className='navBar__bar__links__list--link' href='#inicio'> Inicio </a>
                            </li>
                            <li>
                                <a className='navBar__bar__links__list--link' href='#servicios'> Servicios </a>

                            </li>
                            <li>
                                <a className='navBar__bar__links__list--link' href='#tratamientos'> Tratamientos </a>
                            </li>
                            <li>
                                <a className='navBar__bar__links__list--link' href='#nosotros'> Nosotros </a>
                            </li>
                        </ul>
                    </div>

                    <a className='navBar__bar--whats' href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!">
                        Enviar whatsapp
                    </a>

                </nav>
            </section>
        </>
    )
}