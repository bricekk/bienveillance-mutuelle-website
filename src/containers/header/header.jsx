import React from 'react';
import people from '../../assets/people.png';
import img1 from '../../assets/img1.jpg';
import './header.scss';

const Header = () => (
  <div className="bvm__header section__padding" id="home">
    <div className="bvm__header-content">
      <h1 className="gradient__text">BMBF</h1>
      <p>Bienvenue sur le site officiel de Bienveillance Mutuelle. <br/>
      L'organisme Bienveillance Mutuelle pour le Bien-être de la Femme (BMBF) est un organisme sans but lucratif dont le mandat est d'organiser des activités, des conférences pour promouvoir la bienveillance entre les femmes.<br/>
      Souscrivez &agrave; la newsletter pour ne rien manquer de notre actualit&eacute;.</p>

      <div className="bvm__header-content__input">
        <input type="email" placeholder="Votre adresse email" />
        <button type="button">Souscrire</button>
      </div>
    </div>

    <div className="bvm__header-image">
      <img src={img1} alt="women img1 bienveillance mutuelle" id='imgheader'/>
    </div>
  </div>
);

export default Header;