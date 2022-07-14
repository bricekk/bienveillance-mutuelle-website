import React from 'react';
import Feature from '../../components/feature/feature';
import './features.scss';

const featuresData = [
  {
    title: '',
    text: 'Etablissement de relation saines et sincères entre les femmes. Que chacune puisse être hereuse, aussi bien poour elle que pour les autres.',
  },
  {
    title: '',
    text: 'Réunir les femmes dans un collectif vivant et dynamique afin de promouvoir le bien-être de toutes les femmes du mouvement et du monde.',
  },
  {
    title: '',
    text: 'Instaurer des activitées qui permettent aux femmes de rompres la solitudes et échapper à la depression tout en étant en bonne companie dans une ambiance bienveillante.',
  },
  {
    title:'',
    text: 'Déplacement dans de différents environnements sociaux pour la promotion de la bienveillance mutuelle entre femmes.'
  }
];

const Features = () => (
  <div className="gpt3__features section__margin section__padding" id="mission">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Missions de BMBF</h1>
      <p>En dehors de promouvoir la sororit&eacute; entre femmes:</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
