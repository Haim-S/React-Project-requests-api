import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "./Navbar.style.css"
import {NavbarAboutContainerStyle ,NavbarLinksWrapper ,NavbarLinkStyle } from './NavbarStyle';

const navbarLinks = 
[
  {paht: "/", label: "Home"},
  {paht: "/all", label: "Characters"},
  {paht: "/about", label: "About"},
];



const Navbar = () => {

  let navigate = useNavigate();
  const location = useLocation();


  return (
    <nav>
      <div className='icon'>
        <img onClick={()=> navigate(`/`)} src='https://play-lh.googleusercontent.com/yfiIOdk6OF5T_ekvwQKSTjnP0ZQwGDbqXUQp6oBgqmFSX86xAfBEaEG3xCOBCtMjCA=w240-h480-rw' alt='true'/>
      </div>
<NavbarAboutContainerStyle borderbottom ={location.pathname === "/about"}>

        <NavbarLinksWrapper>
  {navbarLinks.map((link, index)=> (
    <NavbarLinkStyle active={location.pathname === link.path} key={index}>
    <Link to={link.paht}>{link.label}</Link>
    </NavbarLinkStyle>
    ))}
    </NavbarLinksWrapper>
</NavbarAboutContainerStyle>
    </nav>
  )
}

export default Navbar