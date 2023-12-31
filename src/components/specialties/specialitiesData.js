import image1 from './speciality/img/itero-hand.png'
import image2 from './speciality/img/invisalign.jpg'

export const specialitiesData = [
    {
        span: `HELLO, I'M ITERO`,
        title: 'En Núcleo Dental contamos con la tecnología iTero',
        text1: 'iTero es una herramienta eficaz que proporciona visualizaciones muy realistas del aspecto que podría tener tu sonrisa tras el tratamiento.',
        text2: 'iTero es el primer sistema híbrido de imagen dental que registra imágenes 3D en simultáneo sin exposición a radiación, ayudando a detectar caries en las zonas más inaccesibles, descubriendo cambios y lesiones en el esmalte dental, y simulando el resultado de su respectivo tratamiento. descubre por qué los escáneres iTero han sido la fuerza impulsora detrás de más de 10 millones de restauraciones, desde coronas y puentes hasta implantes y dentaduras.',
        href: 'https://www.youtube.com/watch?v=gSPlAW44bXQ&amp;ab_channel=iTeroScanner',
        btn: 'Conoce iTero',
        img: {
            src: image1,
            position: 'left',
            background: 'noBackground'
        }

    },

    {
        span: 'Invisalign',
        title: 'Nos preocupa tu sonrisa.',
        text1: '¿No te gustan los brackets? Contamos con una opción más discreta: Invisalign.',
        text2: 'Invisalign es una alternativa más estética los brackets, su imagen transparente interfiere menos con tu imagen y permiten tomar el tratamiento sin dejar de mostrar tu sonrisa.',
        href: 'https://api.whatsapp.com/send?phone=523329147808&text=%C2%A1Hola%20N%C3%BAcleo%20Dental!',
        btn: 'Conoce Invisalign',
        img: {
            src: image2,
            position: 'right',
            background: 'background'
        }
    }
]