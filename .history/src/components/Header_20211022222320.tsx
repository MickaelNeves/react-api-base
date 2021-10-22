import logo from '../img/tv_logo.png'
import {Link} from "react-router-dom"

//Separate header component used across both pages in the application. The logo is customised for Shorthand specifically, and is now clickable due to the "react-router-dom", bringing the user back to the homepage. 
//No alt text for the logo, using convention that decorative images require only an empty string. 

const Header = () => {
    return (
        <header className="center">
            <Link to="/">
            <img className="logo"src={logo} alt='' />
            </Link>
        </header>
    )
}

export default Header
