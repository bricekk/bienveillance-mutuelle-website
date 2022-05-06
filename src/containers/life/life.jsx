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
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">{title}</h1>
                <p>{text}</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    </div>
);

export default Life;
