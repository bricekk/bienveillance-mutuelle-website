import React from 'react'
import logo from '../../assets/logo.png'
import './footer.scss'

function footer() {
  return (
    <div className="bvm__footer section__padding gradient__happier">
      <div className="bvm__footer-links">
        <div className="bvm__footer-links_logo">
          <img src={logo} alt="bvm_logo" />
        </div>
        <div className="bvm__footer-links_div">
          <h4>Reseaux sociaux</h4>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Likedin</p>
        </div>
        <div className="bvm__footer-links_div">
          <h4>Siege social</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>bienveillancemutuelle2021@gmail.com</p>
        </div>
      </div>

      <div className="bvm__footer-copyright">
        <p>@2022 BMBF. All rights reserved.</p>
      </div>
    </div>
  )
}

export default footer