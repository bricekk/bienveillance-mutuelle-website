import React, { useState } from 'react';
import Activity from '../../components/activity/activity';
import './about.scss';
import { IoMdImages } from 'react-icons/io'
import MediaQuery from 'react-responsive'

const About = () => {


  const [showMe, setVariable] = useState(false)

  function setVariable1() {
    setVariable(true);
  }

  function setVariableLess() {
    setVariable(false);
  }

  const Some = () => {
    return (
      <>
        <Activity title="Conf&eacute;rences" text="Des conf&eacute;rences avec des femmes inspirantes afin de  d&eacute;battre des enjeux sociaux du point de vue f&eacute;minin. ainsi que des discours sur la bienveillance sur la bienveillance." />
        <Activity title="Soir&eacute;es" text="Des soir&eacute;es dansantes chic pendant lesquelles des femmes prennent la parole pour partager leur vision de Bienveillance. ainsi que des discours. ainsi que des discours ." />
        <Activity title="Des pauses th&eacute;" text="Pour se d&eacute;tendre et partager davantages sur des sujets bienveillants. ainsi que des discours sur la bienveillance. sur la bienveillance sur la bienveillance" />
        <Activity title="Croisieres" text="Pour se d&eacute;tendre et partager davantages sur des sujets bienveillants. ainsi que des discours sur la bienveillance. sur la bienveillance sur la bienveillance" />
        <div className='bvm__about-container-buttonFeature'>
          <p onClick={() => setVariableLess()}>Afficher moins</p>
        </div>
      </>
    )
  }

  const SomeLarge = () => {
    return (
      <>
        <Activity title="Conf&eacute;rences" text="Des conf&eacute;rences avec des femmes inspirantes afin de  d&eacute;battre des enjeux sociaux du point de vue f&eacute;minin. ainsi que des discours sur la bienveillance sur la bienveillance." />
        <Activity title="Soir&eacute;es" text="Des soir&eacute;es dansantes chic pendant lesquelles des femmes prennent la parole pour partager leur vision de Bienveillance. ainsi que des discours. ainsi que des discours ." />
        <Activity title="Des pauses th&eacute;" text="Pour se d&eacute;tendre et partager davantages sur des sujets bienveillants. ainsi que des discours sur la bienveillance. sur la bienveillance sur la bienveillance" />
        <Activity title="Croisieres" text="Pour se d&eacute;tendre et partager davantages sur des sujets bienveillants. ainsi que des discours sur la bienveillance. sur la bienveillance sur la bienveillance" />
      </>
    )
  }

  return (
    <div className="bvm__about gradient__about section__margin" id="about">
      <div className="bvm__about-activity">
        <Activity title="Contexte" text="La femme a un rôle pr&eacute;cieux et occupe une place de choix dans la soci&eacute;t&eacute;. 
          Pour assumer efficacement ce rôle, elle a besoin d'être &eacute;quilibr&eacute;e. La contribution des autres femmes à cette &eacute;quilibre est fondamentale. Et ceci n'est possible que grâce à la bienveillante mutuelle. 
          Les femmes se doivent de s'appr&eacute;cier et de se respecter mutuellement. 
          Ceci leur permettra de mettre à profit leur exp&eacute;riences de la vie tout en apprenant de celles des autres.
          C'est dommage de constater que la r&eacute;alit&eacute; est toute autre chose.
          Il est important de pr&eacute;ciser qu'il n'est pas question ici de pointer un doigt accusateur sur les femmes. Il s'agit plutôt de sensibilisation,  de prise de conscience..
          Nul besoin d’être experte pour constater le manque de bienveillance entre les femmes.
          En r&eacute;alit&eacute;, force est de constater qu’une  relation saine, sincère, sans hypocrisie et sans jalousie entre les femmes est une exception au lieu d'être la règle. Pourtant, ça ne devrait pas être le cas. Peu importe son âge, sa situation matrimoniale ou sociale,son niveau d'&eacute;tudes, chacune femme est unique et pr&eacute;cieuse." />
      </div>
      <div className="bvm__about-heading">
        <h1 className="gradient__h1">Nos activit&eacute;s sont les suivantes</h1>
        <p className=''><a href='#life'>Parcourir la gallerie <IoMdImages color="#000" size={30} /></a></p>
      </div>
      <div className="bvm__about-container">
        <Activity title="Pique-niques et Randonn&eacute;es" text="Avec des jeux et d'autres activit&eacute; pour forger la bienveillance ainsi que des discours sur la bienveillance. sur la bienveillance" />
        <Activity title="Zumba-yoga" text="Des matin&eacute;es zumba-yoga suivis de causeries(t&eacute;moignages, suggestions, questions etc..) sur la bienveillance mutuelle entre les femmes autour d'une collation-sant&eacute;." />
        <MediaQuery minWidth={750}>
          <SomeLarge />
        </MediaQuery>
        <div className='bvm__about-container-buttonFeature'>
          {!showMe && (<p onClick={() => setVariable1()}>Afficher plus</p>)}
        </div>
        {showMe && (
          <Some />
        )
        }
      </div>
    </div>
  )

}

export default About;