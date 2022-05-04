import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.scss'
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
    <p><a href='#home'>Acceuil</a></p>
    <p><a href='#about'>A propos</a></p>
    <p><a href='#event'>Evenements</a></p>
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
        <button type='button'>Prendre part</button>
      </div>
      <div className='bvm__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine className='closeLine' color="#fff" size={40} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='bvm__navbar-menu_container flip-in-ver-right'>
            <ul>
              <li className="p__opensans">Accueil</li>
              <li className="p__opensans">A propos</li>
              <li className="p__opensans">Evenements</li>
              <li className="p__opensans">Contact</li>
            </ul>
            <div className='bvm__navbar-menu_container-links-sign'>
              <button type='button'>Prendre part</button>
            </div>
          </div>
        )
        }
      </div>

    </div>
  )
}

export default Navbar