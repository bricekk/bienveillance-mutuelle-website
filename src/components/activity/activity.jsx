import React from 'react';
import './activity.scss';

const Activity = ({ title, text }) => (
  <div className="bvm__activities-container__activity">
    <div className="bvm__activities-container__activity-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="bvm__activities-container_activity-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Activity;