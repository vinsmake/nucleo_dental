import { useEffect, useState } from 'react';
import { MenuClose } from '../../../assets/icons/MenuClose'
import { MenuOpen } from '../../../assets/icons/MenuOpen'
import { headerData } from '../headerData.js'
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
    const [Menu, setMenu] = useState();
    const handleClick = () => {
        setMenu(!Menu);
    }


    const {navLinks, navBtn, navName} = headerData.navData;


    return (
        <>
            <section className={`navBar ${navBarActive ? 'navBar--active' : ''}`} id='navBar'>
                <nav className='navBar__bar'>
                    <a href={navName.href} className='navBar__bar--logo'>
                        {navName.text}
                    </a>

                    <div className={`navBar__bar__links ${Menu ? 'navBar__bar__links--active' : ''}`} id="navBar--links">
                        <ul className='navBar__bar__links__list'>
                            {navLinks.map((link, index) => {
                                return (
                                    <li key={index}>
                                    <a className='navBar__bar__links__list--link' id='navBar--link' href={link.href}> {link.text} </a>
                                </li>
                                )
                            })}
                        </ul>
                    </div>

                    <a className='navBar__bar--whats' href={navBtn.href}>
                        {navBtn.text}
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