import "./normalize.css"
import { Header } from "./components/header/Header";
import './NucleoDental.css';
import { Testing } from "./components/testing";
import { Services } from "./components/services/services";
import { Specialties } from "./components/specialties/Specialties";


export const NucleoDental = () => {
  return (
  <>
  <Header/>
  <Services/>
  <Specialties/>
  <Testing/>
  </>
  )
}
