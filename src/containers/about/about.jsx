import React from 'react';
import Activity from '../../components/activity/activity';
import './about.scss';
import {IoMdImages} from 'react-icons/io'

const WhatGPT3 = () => (
  <div className="bvm__about gradient__about section__margin" id="wgpt3">
    <div className="bvm__about-activity">
      <Activity title="Contexte" text="La femme a un rôle précieux et occupe une place de choix dans la société. 
Pour assumer efficacement ce rôle, elle a besoin d'être équilibrée. La contribution des autres femmes à cette équilibre est fondamentale. Et ceci n'est possible que grâce à la bienveillante mutuelle. 
Les femmes se doivent de s'apprécier et de se respecter mutuellement. 
Ceci leur permettra de mettre à profit leur expériences de la vie tout en apprenant de celles des autres.
C'est dommage de constater que la réalité est toute autre chose.
Il est important de préciser qu'il n'est pas question ici de pointer un doigt accusateur sur les femmes. Il s'agit plutôt de sensibilisation,  de prise de conscience..
Nul besoin d’être experte pour constater le manque de bienveillance entre les femmes.
En réalité, force est de constater qu’une  relation saine, sincère, sans hypocrisie et sans jalousie entre les femmes est une exception au lieu d'être la règle. Pourtant, ça ne devrait pas être le cas. Peu importe son âge, sa situation matrimoniale ou sociale,son niveau d'études, chacune femme est unique et précieuse." />
    </div>
    <div className="bvm__about-heading">
      <h1 className="gradient__h1">Nos activit&eacute;s sont les suivantes</h1>
      <p className=''>Parcourir la gallerie <IoMdImages color="#000" size={30} /></p>
    </div>
    <div className="bvm__about-container">
      <Activity title="Des pique-niques" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
      <Activity title="Zumba-yoga" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Activity title="Des pauses thé" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Activity title="Conférences" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />   
    </div>
  </div>
);

export default WhatGPT3;