import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-link'></i> The Co-App
        </Link>
      </h1>
      <ul>
        <li>
          <a href='!#'>Developers</a>
        </li>
        <li>
          <Link to='register.html'>Register</Link>
        </li>
        <li>
          <Link to='login.html'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
