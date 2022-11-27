import React from 'react'
import Navbar from './navbar/Navbar';
import Header from './header/Header';
import Footer from './footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import "./Layout.style.css"
import { TagMainStyle } from './LayoutStyle';

const Layout = () => {

  let location = useLocation();

  return (
    <>
    <Navbar/>
    <Header/>
    <TagMainStyle changeTheStyleBecausePath={location.pathname === "/about"}>
    <main>
        <Outlet/>
    </main>
    </TagMainStyle>
    <Footer/>
    </>
  )
}

export default Layout