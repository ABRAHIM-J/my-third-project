import React from 'react';
import logo from "../../assets/logo.png"
import gitlogo from "../../assets/icons8-github-24.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li>    <Link to="/"> 
           Home  
             
        </Link>  </li>
        
       <li> <Link to="/allapps">
            Apps
         
        </Link> </li>
        <li> <Link to='/install'>Installation</Link></li>
      </ul>
    </div>
   <Link to="/" className="btn btn-ghost text-xl">
  <span>
    <img src={logo} className="w-10" alt="" />
  </span>
  Hero.IO
</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <li><Link to="/">Home</Link></li>
      <li> 
        <Link to="/allapps">
          Apps
        </Link>
        </li>
      <li><Link to='/install'>Installation</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/' className="btn"> <span> <img src={gitlogo} alt="" /> </span>Contribute</a>
  </div>
</div>
    );
};

export default Navbar;