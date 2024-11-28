import React from 'react';

const WhyInvestCard = ({ icon, title, description }) => {
  return (
    <div className="col-xsm-6 col-sm-6 col-md-4 col-lg-3">
      <div className="why-invest-card">
        <span className="why-invest-card__icon">
          <i className={icon}></i>{' '}
        </span>
        <div className="why-invest-card__content">
          <h6 className="why-invest-card__title">{title}</h6>
          <p className="why-invest-card__desc">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WhyInvestCard;
