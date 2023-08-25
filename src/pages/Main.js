import { Outlet, Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file

function Main(props){
    const buttonStyle = {
      margin: '10px',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      
    };

    return (
        <div className="main-container bg-home">
            <h1 className='welcome'>Welcome to the Movie Star App</h1>
            <h3 className='signup-prompt'>Do you want to sign up?</h3>
            <Link to="/signup">
                <button style={buttonStyle}>Sign Up</button>
            </Link>
            <h3 className='login-prompt'>Do you want to log in?</h3>
            <Link to="/login">
                <button style={buttonStyle}>Log In</button>
            </Link>
            <Outlet />
        </div>
    );
}

export default Main;