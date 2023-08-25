import { Form } from 'react-router-dom';
import './Login.css'; // Import the CSS file

function Signup(props) {
  return (
    <div className="signup-container"> {/* Add the container class */}
      <h3 className='signup-form'>Signup Form</h3>
      <Form action="/signup" method="POST">
        <label htmlFor="username" className='username'>Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password" className='password'>Password</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Signup" />
      </Form>
    </div>
  );
}

export default Signup;
