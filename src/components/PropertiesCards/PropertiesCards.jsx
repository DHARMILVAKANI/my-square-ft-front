import React from 'react';
import { NavLink } from 'react-router-dom';

const PropertyCard = ({ imageUrl, propertyUrl, title, location, progressBarValue, profit, schedule, capitalBack, price }) => {
  return (
    <article className="card property--card border-0 shadow-sm">
      <a className="card-img-top" href={propertyUrl}>
        <img src={imageUrl} alt="property-image" />
      </a>
      <div className="card-body px-2 py-3 p-md-3 p-xl-4">
        <div className="card-body-top">
          <h5 className="card-title mb-2">
            <NavLink to={propertyUrl} className="text-decoration-none fs-4 fw-semibold">
              {title}
            </NavLink>
          </h5>
          <ul className="card-meta card-meta--one" style={{ paddingLeft: 0 }}>
            <li className="card-meta__item card-meta__item__location">
              <i className="las la-map-marker-alt"></i>
              <span className="text" style={{ color: 'rgb(139, 137, 137)', fontWeight: 600 }}>
                {location}
              </span>
            </li>
          </ul>
        </div>
        <div className="card-body-middle">
          <div className="card-progress mb-4">
            <div className="card-progress__bar">
              <div className="card-progress__thumb" style={{ width: `100%` }}></div>
            </div>
            <span className="card-progress__label fs-12">
              {progressBarValue} Investors | ₹{'0.00'} INR ({progressBarValue}%)
            </span>
          </div>
          <ul className="card-meta card-meta--two" style={{ paddingLeft: 0 }}>
            <li className="card-meta__item">
              <div className="text">{profit}</div>
              <span className="subtext">Profit</span>
            </li>
            <li className="card-meta__item">
              <div className="text">{schedule}</div>
              <span className="subtext">Profit Schedule</span>
            </li>
            <li className="card-meta__item">
              <div className="text">{capitalBack}</div>
              <span className="subtext">Capital Back</span>
            </li>
          </ul>
        </div>
        <div className="card-body-bottom mb-4">
          <a className="btn orange_btn" href={propertyUrl} role="button">
            Details
          </a>
          <span className="card-price">₹{price} INR</span>
        </div>
      </div>
    </article>
  );
};
export default PropertyCard;
