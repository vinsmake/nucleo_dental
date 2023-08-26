import { Speciality01 } from "./speciality/Speciality01"
import { Speciality02 } from "./speciality/Speciality02"

export const Specialties = () => {
    return (
    <>
        <section className="specialties" id="specialties">
            <Speciality01 className={'speciality__data--left'} background={'noBackground'}/>
            <Speciality02 className={'speciality__data--right'} background={'background'}/>

        </section>
    </>
    )
}