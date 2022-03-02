import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div
      style={{
        marginTop: '16px',
        marginBottom: '48px',
      }}
    >
      <ul
        style={{
          marginTop: '20px',
          textDecoration: 'none',
        }}
      >
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
