import './TopSocialBar.css'
import { Facebook } from "../../../assets/icons/Facebook";
import { Whatsapp } from "../../../assets/icons/Whatsapp";
import { Instagram } from '../../../assets/icons/Instagram';
import { Telefono } from '../../../assets/icons/Telefono';
import { headerData } from '../../../data.js'

export const TopSocialBar = () => {

    
    const {facebook, whatsapp, instagram, tel} = headerData.barData;

    return (
        <>
            <section className="topSocialBar">
                <div className="topSocialBar__bar">


                    <ul className="topSocialBar__bar__contactList">
                        <li className="topSocialBar__bar__contactList--item">
                            <Facebook className={"topSocialBar__bar__contactList--icon"}></Facebook>
                            <a href={facebook.href}>Facebook</a>
                        </li>

                        <li className="topSocialBar__bar__contactList--item">
                            <Whatsapp className={"topSocialBar__bar__contactList--icon"}></Whatsapp>
                            <a href={whatsapp.href}>{whatsapp.text}</a>
                        </li>
                    </ul>


                    <ul className="topSocialBar__bar__socialList">
                        <li className='topSocialBar__bar__socialList--item'>
                            <a href={whatsapp.href} className="social-link">
                            <Whatsapp className={"topSocialBar__bar__socialList--icon"}></Whatsapp>
                            </a>
                        </li>

                        <li className='topSocialBar__bar__socialList--item'>
                            <a href={facebook.href} className="social-link">
                            <Facebook className={"topSocialBar__bar__socialList--icon"}></Facebook>
                            </a>
                        </li>

                        <li className='topSocialBar__bar__socialList--item'>
                            <a href={instagram.href} className="social-link">
                            <Instagram className={"topSocialBar__bar__socialList--icon"}></Instagram>
                            </a>
                        </li>

                        <li className='topSocialBar__bar__socialList--item'>
                            <a href={'tel:' + tel.href} className="social-link">
                            <Telefono className={"topSocialBar__bar__socialList--icon"}></Telefono>
                            </a>
                        </li>

                    </ul>

                </div>
            </section>
        </>
    )
}