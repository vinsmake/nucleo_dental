import { Facebook } from './Facebook'
import './TopSocialBar.css'
import { Whatsapp } from './Whatsapp'

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
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!"
                                className="social-link">
                                <ion-icon name="logo-whatsapp"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/proatencionmedica" className="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/nucleodental.mzo/" className="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="tel:3329147808" className="social-link">
                                <ion-icon name="call-outline"></ion-icon>
                            </a>
                        </li>

                    </ul>

                </div>
            </div>
        </>
    )
}