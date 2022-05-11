import React from 'react'
import logo from '../../assets/logoW.png'
import './footer.scss'
import {IoLogoFacebook, IoLogoInstagram, IoLogoYoutube} from 'react-icons/io'

function footer() {
  return (
    <div className="bvm__footer section__padding">
      <div className="bvm__footer-links">
        <div className="bvm__footer-links_logo">
          <img src={logo} alt="bvm_logo" />
        </div>
        <div className="bvm__footer-links_div">
          <h4>Reseaux sociaux</h4>
          <p><IoLogoFacebook color="#fff" size={30}/>  <IoLogoInstagram size={30}/>   <IoLogoYoutube size={30}/></p>
        </div>
        <div className="bvm__footer-links_div">
          <h4>Contact</h4>
          <p><a href='mailto:bienveillancemutuelle2021@gmail.com'>bienveillancemutuelle2021@gmail.com</a></p>
        </div>
      </div>

      <div className="bvm__footer-copyright">
        <p>@2022 BMBF. All rights reserved.</p>
      </div>
    </div>
  )
}

export default footer