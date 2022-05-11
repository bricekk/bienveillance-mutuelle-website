import React from 'react';
import Feature from '../../components/feature/feature';
import './features.scss';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'L’autonomisation des femmes',
  },
  {
    title: 'Become the tended active',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush..',
  },
];

const Features = () => (
  <div className="gpt3__features section__margin section__padding" id="mission">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Missions de BMBF</h1>
      <p>En dehors d'instaurer la sororit&eacute; entre femmes:</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
