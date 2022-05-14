import React from 'react';
import img1 from '../../assets/img1.jpg';
import './header.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

  const notify = () => toast("Abonnement...");

  return(
  <div className="bvm__header section__padding" id="home">
    <div className="bvm__header-content">
      <h1 className="gradient__text">BMBF</h1>
      <p>Bienvenue sur le site officiel de Bienveillance Mutuelle. <br/>
      L'organisme Bienveillance Mutuelle pour le Bien-être de la Femme (BMBF) est un organisme à but non lucratif dont le mandat est d'organiser des activités, des conférences pour promouvoir la bienveillance entre les femmes.<br/>
      Souscrivez &agrave; la newsletter pour ne rien manquer de notre actualit&eacute;.</p>

      <div className="bvm__header-content__input">
        <input type="email" placeholder="Votre adresse email" />
        <button type="button" onClick={notify}>Souscrire</button>
        <ToastContainer />
      </div>
    </div>

    <div className="bvm__header-image">
      <img src={img1} alt="women img1 bienveillance mutuelle" id='imgheader'/>
    </div>
  </div>
)};

export default Header;