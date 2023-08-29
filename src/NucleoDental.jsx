import "./normalize.css"
import './NucleoDental.css';
import { Header } from "./components/header/Header";
import { Services } from "./components/services/Services";
import { Specialties } from "./components/specialties/Specialties";


export const NucleoDental = () => {
  return (
  <>
  <Header/>
  <Services/>
  <Specialties/>
  </>
  )
}
