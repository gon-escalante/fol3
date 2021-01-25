import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

interface NavBarProps {

}


export const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <div className="nav-bar-container">
    <Link className="nav-bar-element" to="/">Home</Link>
      <Link className="nav-bar-element" to="/login">Login</Link>
    </div>
  );
}