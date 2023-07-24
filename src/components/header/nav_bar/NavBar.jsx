import { useEffect, useState } from 'react';
import { MenuClose } from '../../../assets/icons/MenuClose'
import { MenuOpen } from '../../../assets/icons/MenuOpen'
import './navBar.css'

export const NavBar = () => {

    /* stick menu when scroll */
    const [navBarActive, setNavBarActive] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= 100) {
          setNavBarActive(true);
        } else {
          setNavBarActive(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        // Limpia el evento del scroll cuando el componente se desmonte
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    /* burguer toggle */
    const [Menu, setMenu ] = useState();
    const handleClick = () => {
        setMenu(!Menu);
    }




    return (
        <>
            <section className={`navBar ${navBarActive ? 'navBar--active' : ''}`} id='navBar'>
                <nav className='navBar__bar'>
                    <a href='#' className='navBar__bar--logo'>
                        Núcleo Dental
                    </a>

                    <div className={`navBar__bar__links ${Menu ? 'navBar__bar__links--active' : ''}`} id="navBar--links">
                        <ul className='navBar__bar__links__list'>
                            <li>
                                <a className='navBar__bar__links__list--link' id='navBar--link' href='#inicio'> Inicio </a>
                            </li>
                            <li>
                                <a className='navBar__bar__links__list--link' id='navBar--link' href='#servicios'> Servicios </a>

                            </li>
                            <li>
                                <a className='navBar__bar__links__list--link' id='navBar--link' href='#tratamientos'> Tratamientos </a>
                            </li>
                            <li>
                                <a className='navBar__bar__links__list--link' id='navBar--link' href='#nosotros'> Nosotros </a>
                            </li>
                        </ul>
                    </div>

                    <a className='navBar__bar--whats' href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!">
                        Enviar whatsapp
                    </a>

                    <div className='navBar__bar--button' id='navBar--button' onClick={handleClick}>
                        <MenuOpen className={`navBar__bar--button--icon ${Menu ? '' : 'navBar__bar--button--icon--active'}`}></MenuOpen>
                        <MenuClose className={`navBar__bar--button--icon ${Menu ? 'navBar__bar--button--icon--active' : ''}`}></MenuClose>
                    </div>

                </nav>
            </section>
        </>
    )
}