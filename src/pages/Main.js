import { Outlet, Link } from 'react-router-dom';

function Main(props){
    return <div>
    <h1>Welcome to the Movie Star App</h1>
    <h3>Do you want to sign up?</h3>
    <Link to="/signup"><button>Sign Up</button></Link>
    <h3>Do you want to log in?</h3>
    <Link to="/login"><button>Log In</button></Link>
    <Outlet />
    </div>
}

export default Main;