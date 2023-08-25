import { Link } from "react-router-dom";
import profilepic from '../profilepic.jpeg';


function Header(props) {
    return <nav className="header"> 
        <div className="header-container">
            <div className="logo-container"><Link to="/">Movie Star</Link></div>
            <div className="menu-container">
                <ul className="menu-list">
                </ul>
            </div>
            <div className="profile-container">
                <img className="profile-picture" src={profilepic} alt="profile picture"/>
                <div className="profile-text-container">Welcome!</div>
            </div>
        </div>        
    </nav>
}

export default Header