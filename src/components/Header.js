import { Link } from "react-router-dom";
import profilepic from '../profilepic.jpeg';


function Header(props) {
    return <nav className="header"> 
        <div className="header-container">
            <div className="logo-container">Movie Star</div>
            <div className="menu-container">
                <ul className="menu-list">
                    <li className="menu-list-item"><Link to="/">Home</Link></li>
                    <li className="menu-list-item"><Link to="/">Movies</Link></li>
                    <li className="menu-list-item"><Link to="/">Series</Link></li>
                    <li className="menu-list-item"><Link to="/">Popular</Link></li>
                    <li className="menu-list-item"><Link to="/">Trends</Link></li>
                </ul>
            </div>
            <div className="profile-container">
                <img className="profile-picture" src={profilepic} alt="profile picture"/>
                <div className="profile-text-container">Welcome!</div>
                <div className="toggle">
                    <div className="toggle-ball"></div>
                </div>
            </div>
        </div>
        
    </nav>
}

export default Header