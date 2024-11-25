import React from 'react';
import './Home.scss';
import { NavLink } from 'react-router-dom';
import patternImage from '../../assets/thumbs/pattern-3.png';
const Home = () => {
  return (
    <section className="banner bg-pattern3" style={{ backgroundImage: `url(${patternImage})` }}>
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-7">
            <div className="banner-content">
              <p className="banner-content__subtitle">Smart &amp; secure real estate investment platform</p>
              <h1 className="banner-content__title">Invest in The Future of Real Estate</h1>
              <NavLink to="#" className="btn orange_btn">
                Get Started
              </NavLink>
              <ul className="banner-info">
                <li className="banner-info__item">
                  <h3 className="title" data-s-break="">
                    9K<span>+</span>
                  </h3>
                  <span className="text">Member</span>
                </li>
                <li className="banner-info__item">
                  <h3 className="title" data-s-break="">
                    3K<span>+</span>
                  </h3>
                  <span className="text">Investors</span>
                </li>
                <li className="banner-info__item">
                  <h3 className="title" data-s-break="">
                    20<span>%</span>
                  </h3>
                  <span className="text">Average Profit Upto</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-5">
            <div className="banner-thumbs">
              <div className="banner-thumbs-image">
                <img className="fit-image pe-none" src="https://mysquarefeet.net/assets/images/frontend/banner/663f5e38b1bae1715428920.png" alt="banner-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
