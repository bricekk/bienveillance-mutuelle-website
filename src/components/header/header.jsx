import React from 'react';
import people from '../../assets/people.png';
import hands from '../../assets/hands.png';
import './header.scss';

const Header = () => (
  <div className="bvm__header section__padding" id="home">
    <div className="bvm__header-content">
      <h1 className="gradient__text">Le bien-être de la femme</h1>
      <p>Bienvenue sur le site officiel de Bienveillance Mutuelle. <br/>
      L'organisme Bienveillance Mutuelle pour le Bien-être de la Femme (BMBF) est un organisme sans but lucratif dont le mandat est d'organiser des activités, des conférences pour promouvoir la bienveillance entre les femmes.<br/>
      Souscrivez &agrave; la newsletter pour ne rien manquer de notre actualit&eacute;.</p>

      <div className="bvm__header-content__input">
        <input type="email" placeholder="Votre adresse email" />
        <button type="button">Souscrire</button>
      </div>

      <div className="bvm__header-content__people">
        <img src={people} alt='Bienveillance Mutuelle community'/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="bvm__header-image">
      <img src={hands} alt="women hands bienveillance mutuelle"/>
    </div>
  </div>
);

export default Header;