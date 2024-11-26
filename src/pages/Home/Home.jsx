import React from 'react';
import './Home.scss';
import { NavLink } from 'react-router-dom';
import patternImage from '../../assets/thumbs/pattern-3.png';
import patternImage2 from '../../assets/thumbs/pattern-bottom-left.png';

const Home = () => {
  return (
    <>
      <section
        className="banner bg-pattern3"
        style={{
          background: `url(${patternImage}) repeat-x center center, whitesmoke`
        }}>
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
      <section className="why-invest py-120">
        <div className="container ">
          <div className="section-heading">
            <p className="section-heading__subtitle">Built to help smart investors invest smarter</p>
            <h2 className="section-heading__title">Why Invest in Real Estate?</h2>
          </div>
          <div className="row gy-4 justify-content-center">
            <div className="col-xsm-6 col-sm-6 col-md-4 col-lg-3">
              <div className="why-invest-card">
                <span className="why-invest-card__icon">
                  <i className="las la-hand-holding-usd"></i>{' '}
                </span>
                <div className="why-invest-card__content">
                  <h6 className="why-invest-card__title">Secure Investment</h6>
                  <p className="why-invest-card__desc">Rest assured with our secure investment solutions, your financial future is protected</p>
                </div>
              </div>
            </div>
            <div className="col-xsm-6 col-sm-6 col-md-4 col-lg-3">
              <div className="why-invest-card">
                <span className="why-invest-card__icon">
                  <i className="lab la-gg-circle"></i>{' '}
                </span>
                <div className="why-invest-card__content">
                  <h6 className="why-invest-card__title">Transparent Platform</h6>
                  <p className="why-invest-card__desc">Experience the confidence of a transparent platform for your peace of mind</p>
                </div>
              </div>
            </div>
            <div className="col-xsm-6 col-sm-6 col-md-4 col-lg-3">
              <div className="why-invest-card">
                <span className="why-invest-card__icon">
                  <i className="las la-cloud-meatball"></i>{' '}
                </span>
                <div className="why-invest-card__content">
                  <h6 className="why-invest-card__title">Passive Income</h6>
                  <p className="why-invest-card__desc">Explore opportunities for generating passive income streams</p>
                </div>
              </div>
            </div>
            <div className="col-xsm-6 col-sm-6 col-md-4 col-lg-3">
              <div className="why-invest-card">
                <span className="why-invest-card__icon">
                  <i className="las la-headset"></i>{' '}
                </span>
                <div className="why-invest-card__content">
                  <h6 className="why-invest-card__title">Support</h6>
                  <p className="why-invest-card__desc">Count on our dedicated support team for prompt and reliable assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="latest-property py-120 bg-pattern-bottom-right"
        style={{
          background: `linear-gradient(to top, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0)) 0% 0%, url(${patternImage2}) no-repeat left bottom / 600px 600px, whitesmoke`
        }}>
        <div className="container ">
          <div className="section-heading style-left">
            <p className="section-heading__subtitle">Latest properties</p>
            <div className="section-heading__wrapper">
              <h2 className="section-heading__title">Explore Latest Properties</h2>
              <NavLink className="section-heading__link" to="/">
                <span>Explore</span>
                <i className="las la-long-arrow-alt-right" />
              </NavLink>
            </div>
          </div>
          <div className="row gy-4 g-sm-3 g-md-4 justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <article className="card property--card border-0 shadow-sm">
                <a className="card-img-top " href="https://www.mysquarefeet.net/property/dwarka-indore">
                  <img src="https://www.mysquarefeet.net/assets/images/property/thumb/6725f8c66fffd1730541766.png" alt="property-image" />
                </a>
                <div className="card-body px-2 py-3 p-md-3 p-xl-4">
                  <div className="card-body-top">
                    <h5 className="card-title mb-2">
                      <NavLink to="#" className="text-decoration-none">
                        New Dwarka Heights Indore
                      </NavLink>
                    </h5>
                    <ul className="card-meta card-meta--one" style={{ paddingLeft: 0 }}>
                      <li className="card-meta__item card-meta__item__location">
                        <i className="las la-map-marker-alt"></i>
                        <span className="text" style={{ color: 'rgb(139, 137, 137)', fontWeight: 600 }}>
                          Indore
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body-middle">
                    <div className="card-progress mb-4">
                      <div className="card-progress__bar">
                        <div className="card-progress__thumb"></div>
                      </div>
                      <span className="card-progress__label fs-12">0 Investors | ₹0.00 INR (0%)</span>
                    </div>
                    <ul className="card-meta card-meta--two" style={{ paddingLeft: 0 }}>
                      <li className="card-meta__item">
                        <div className="text">2 - 6%</div>
                        <span className="subtext">Profit</span>
                      </li>
                      <li className="card-meta__item">
                        <div className="text">Onetime</div>
                        <span className="subtext">Profit Schedule</span>
                      </li>
                      <li className="card-meta__item">
                        <div className="text">Yes</div>
                        <span className="subtext">Capital Back</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body-bottom mb-4">
                    <a className="btn orange_btn" href="https://www.mysquarefeet.net/property/dwarka-indore" role="button">
                      Details
                    </a>
                    <span className="card-price">₹100.00 INR</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
