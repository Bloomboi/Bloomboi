import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <h1 id='title' >HomeWorld</h1>
      <nav className='navigation'>
        <ul>
          <li><a href="/my-projects">My Projects</a></li>
          <li><a href="/explore">Explore</a></li>
          <li><a href="/account">Account</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
