import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='container header'>
      <nav className='navbar-header'>
        <h1 className='logo'>DBlogX</h1>
        <div className='nav-links'>
          <ul>
            <li className='links'>
              <Link to='/'>Home</Link>
            </li>
            <li className='links'>
              <Link to='/explore'>Explore</Link>
            </li>
            <li className='links'>
              <Link to='/'>About</Link>
            </li>
            <li className='links'>
              <Link to='/'>How it works</Link>
            </li>
          </ul>
        </div>
        <div className='connect-search'>
          <i className='fa-solid fa-magnifying-glass search'></i>
          <Link to='/' className='sign-up' id='connect'>
            Connect
          </Link>
          <div className='profile-img'>
            <img src='src/image.png' id='profile-img' alt='' />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
