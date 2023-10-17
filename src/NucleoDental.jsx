import "./normalize.css"
import './NucleoDental.css';
import { Header } from "./components/header/Header";
import { Services } from "./components/services/Services";
import { Specialties } from "./components/specialties/Specialties";
import { Banner } from "./components/banner/Banner";
import { Map } from "./components/map/map";
import { Footer } from "./components/footer/Footer";


export const NucleoDental = () => {
  return (
  <>
  <Header/>
  <Services/>
  <Specialties/>
  <Map/>
  <Banner/>
  <Footer/>
  </>
  )
}
