import React from 'react'
import "./Footer.style.css"

const Footer = () => {
  return (
    <footer className='footer-container'>
    <div className='foot'>
<p>CHARACTERS: 826</p>
<p>LOCATIONS: 126</p>
<p>EPISODES: 51</p>
    </div>
    <div className='server-status'>
        <p>SERVER STATUS</p>
        <div className='markPiont'></div>
    </div>
</footer>
  )
}

export default Footer