import './TopSocialBar.css'
import { Facebook } from "../../../assets/icons/Facebook";
import { Whatsapp } from "../../../assets/icons/Whatsapp";
import { Instagram } from '../../../assets/icons/Instagram';
import { Telefono } from '../../../assets/icons/Telefono';

export const TopSocialBar = () => {
    return (
        <>
            <div className="topSocialBar">
                <div className="topSocialBar__bar">


                    <ul className="topSocialBar__bar__contactList">
                        <li className="topSocialBar__bar__contactList--item">
                            <Facebook className={"topSocialBar__bar__contactList--icon"}></Facebook>
                            <a href="https://www.facebook.com/proatencionmedica">Facebook</a>
                        </li>

                        <li className="topSocialBar__bar__contactList--item">
                            <Whatsapp className={"topSocialBar__bar__contactList--icon"}></Whatsapp>
                            <a href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!">+52 1 33 2914 7808</a>
                        </li>
                    </ul>


                    <ul className="topSocialBar__bar__socialList">
                        <li className='topSocialBar__bar__socialList--item'>
                            <a href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!" className="social-link">
                            <Whatsapp className={"topSocialBar__bar__socialList--icon"}></Whatsapp>
                            </a>
                        </li>

                        <li className='topSocialBar__bar__socialList--item'>
                            <a href="https://www.facebook.com/proatencionmedica" className="social-link">
                            <Facebook className={"topSocialBar__bar__socialList--icon"}></Facebook>
                            </a>
                        </li>

                        <li className='topSocialBar__bar__socialList--item'>
                            <a href="https://www.instagram.com/nucleodental.mzo/" className="social-link">
                            <Instagram className={"topSocialBar__bar__socialList--icon"}></Instagram>
                            </a>
                        </li>

                        <li className='topSocialBar__bar__socialList--item'>
                            <a href="tel:3329147808" className="social-link">
                            <Telefono className={"topSocialBar__bar__socialList--icon"}></Telefono>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </>
    )
}