import {Link} from 'react-router-dom'
function NavBar() {
    return (
      <>
        <nav>
            <img src="·" alt="Logo" />
            <Link to='/login'><button type="submit">Log In</button></Link>
        </nav>
      </>
    );
  }
  
  export default NavBar;