import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.scss'
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
    <p><a href='#home'>Accueil</a></p>
    <p><a href='#mission'>Missions</a></p>
    <p><a href='#about'>A propos</a></p>
    <p><a href='#contact'>Contact</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='bvm__navbar'>
      <div className='bvm__navbar-links'>
        <div className='bvm__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='bvm__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='bvm__navbar-sign'>
        <button type='button' onClick={() => setToggleMenu(false)}><a href='#contact'>Contribuer</a></button>
      </div>
      <div className='bvm__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine className='closeLine' color="#fff" size={40} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='bvm__navbar-menu_container flip-in-ver-right'>
            <ul>
              <li className="p__opensans"><a href='#home' onClick={() => setToggleMenu(false)}>Accueil</a></li>
              <li className="p__opensans"><a href='#mission' onClick={() => setToggleMenu(false)}>Missions</a></li>
              <li className="p__opensans"><a href='#about' onClick={() => setToggleMenu(false)}>A propos</a></li>
              <li className="p__opensans"><a href='#contact' onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
            <div className='bvm__navbar-menu_container-links-sign'>
              <button type='button' onClick={() => setToggleMenu(false)}><a href='#contact'>Contribuer</a></button>
            </div>
          </div>
        )
        }
      </div>

    </div>
  )
}

export default Navbar