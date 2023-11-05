import PropTypes from 'prop-types'

import './NavBar.css';

const NavBar = ({title}) => {
  return (
    <nav className='nav-bar'>
      <h1>{title}</h1>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/add-product">Add product</a></li>
            <li><a href="/register">Register</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/log-out">Log out</a></li>
        </ul>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired
}

export default NavBar