import React  from 'react';
import Activity from '../../components/activity/activity';
import './about.scss';
import { IoMdImages, IoIosArrowDropdownCircle } from 'react-icons/io'

const About = () => {


  return (
    <div className="bvm__about gradient__about section__margin" id="about">
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
        <Activity title="Pique-niques et Randonn&eacute;es" text="Avec des jeux et d'autres activit&eacute; pour forger la bienveillance ainsi que des discours sur la bienveillance. sur la bienveillance" />
        <Activity title="Zumba-yoga" text="Des matinées zumba-yoga suivis de causeries(témoignages, suggestions, questions etc..) sur la bienveillance mutuelle entre les femmes autour d'une collation-sant&eacute;." />

        <div className='bvm__about-container-buttonFeature'>
          <p className=''>afficher plus... <IoIosArrowDropdownCircle color='#000' size={15} onClick={() => showMorefeatures(true)}/></p>
        </div>
          <Activity title="Conf&eacute;rences" text="Des conférences avec des femmes inspirantes afin de  débattre des enjeux sociaux du point de vue féminin. ainsi que des discours sur la bienveillance sur la bienveillance." />
          <Activity title="Soir&eacute;es" text="Des soirées dansantes chic pendant lesquelles des femmes prennent la parole pour partager leur vision de Bienveillance. ainsi que des discours. ainsi que des discours ." />
          <Activity title="Des pauses th&eacute;" text="Pour se d&eacute;tendre et partager davantages sur des sujets bienveillants. ainsi que des discours sur la bienveillance. sur la bienveillance sur la bienveillance" />
      </div>
    </div>
  )

}

export default About;