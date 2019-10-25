import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-record-vinyl'></i> Milk-Crate
        </Link>
      </h1>
      <ul>
        <li>
          <a href='!#'>Musicians</a>
        </li>
        <li>
          <a href='!#'>Upload</a>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
