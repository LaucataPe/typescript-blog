import {Link} from 'react-router-dom'
function Register() {
  return (
    <>
        <form>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="text" />
            <label>Password</label>
            <input type="text" />
            <Link to='/login'><button type="submit">Register</button></Link>
        </form>
    </>
  );
}

export default Register;