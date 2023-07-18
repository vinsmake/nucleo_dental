import { NavBar } from "./nav_bar/NavBar"
import { TopSocialBar } from "./top_social_bar/TopSocialBar"

export const Header = () => {
    return (
      <header className="header">
            <TopSocialBar></TopSocialBar>
            <NavBar></NavBar>
      </header>
    )
}