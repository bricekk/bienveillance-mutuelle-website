import React from 'react';
import './life.scss';


const Life = ({ image, title, text }) => (
    <div className=' section__padding'>
        <h1 className='h1'>Activit&eacute;s</h1>
        <div className="bvm__possibility" id="life">
            <div className="bvm__possibility-image">
                <img src={image} alt="possibility" id='img' />
            </div>
            <div className="bvm__possibility-content">
                <h4>Glisser pour voir l'image suivante</h4>
                <h1 className="gradient__text">{title}</h1>
                <p>{text}</p>
                <div className='bvm__possibility-footer'>
                    <div className='img_suivant'>
                        <p>Glisser pour voir l'image suivante</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Life;
