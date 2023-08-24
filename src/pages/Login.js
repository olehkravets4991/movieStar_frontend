import { Form } from 'react-router-dom';
import './Login.css'; // Import the CSS file

function Login(props) {
  return (
    <div className="login-container"> {/* Add the container class */}
      <h3 className='login-form'>Login Form</h3>
      <Form action="/login" method="POST">
        <label htmlFor="username" className='username'>Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password" className='password'>Password</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Login" />
      </Form>
    </div>
  );
}

export default Login;
