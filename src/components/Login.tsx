import { Link } from 'react-router-dom'

function Login() {
    return (
      <>
        <form>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="text" />
            <Link to='/create'><button type="submit">Log In</button></Link>
        </form>
      </>
    );
  }
  
  export default Login;