import React from 'react'
import { useLocation } from 'react-router-dom'
import { TagHeaderStyle } from '../LayoutStyle'
const Header = () => {

  let location = useLocation();

  return (
    <TagHeaderStyle changeTheStyleBecausePath={location.pathname === "/about"}>
    <header>
      <h1>Thw Rick and Morty Api</h1>
    </header>
    </TagHeaderStyle>
  )
}

export default Header