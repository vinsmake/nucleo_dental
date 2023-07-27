import { Hero } from "./hero/hero"
import { NavBar } from "./nav_bar/NavBar"
import { TopSocialBar } from "./top_social_bar/TopSocialBar"
import './header.css'

export const Header = () => {
    return (
      <header className="header" id='home'>
            <TopSocialBar></TopSocialBar>
            <NavBar></NavBar>
            <Hero></Hero>
      </header>
    )
}