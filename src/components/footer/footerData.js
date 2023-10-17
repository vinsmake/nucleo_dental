import location from "./icons/location.png";
import schedule from "./icons/schedule.png";
import whatsapp from "./icons/whatsapp.png";


export const footerData = {
    title: 'Núcleo Dental',
    span: 'Cuidamos tu sonrisa',
    leyend: 'www.nucleodental.com.mx',
    info: [
        {
            href: 'https://maps.app.goo.gl/fxmGv8H8MAKw3zx26',
            icon: location,
            leyend: 'Avenida López Mateos Norte #567'
        },
        {
            href: '#ubicacion',
            icon: schedule,
            leyend: '9:00 am - 7:00 pm'
        },
        {
            href: 'https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!',
            icon: whatsapp,
            leyend: '33 2914 7808'
        }
    ]
}