import { Form } from 'react-router-dom';
import './Login.css'; // Import the CSS file

function Signup(props) {
  return (
    <div className="signup-container"> {/* Add the container class */}
      <h3>Signup Form</h3>
      <Form action="/signup" method="POST">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <input type="submit" value="Signup" />
      </Form>
    </div>
  );
}

export default Signup;
