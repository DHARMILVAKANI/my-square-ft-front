import React from 'react';
import './Home.scss';
import { NavLink } from 'react-router-dom';
import patternImage from '../../assets/thumbs/pattern-3.png';
import patternImage2 from '../../assets/thumbs/pattern-bottom-left.png';
import patternImage3 from '../../assets/thumbs/pattern-top-right.png';
import CityCard from '../../components/CitiesCards/CitiesCards';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PropertyCard from '../../components/PropertiesCards/PropertiesCards';
import WhyInvestCard from '../../components/WhyInvestCards/WhyInvestCards';
import BlogCard from '../../components/BlogCards/BlogCards';
import TestimonialCarousel from '../../components/Testinomial/Testinomial';
import { blogs, cities, investCardsData, properties } from '../../constants/static.data';

const Home = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <button className="slick-prev">◁</button>, // Left Arrow
    nextArrow: <button className="slick-next">▷</button>, // Right Arrow
    responsive: [
      {
        breakpoint: 768, // For smaller screens
        settings: {
          arrows: true
        }
      }
    ]
  };

  return (
    <>
      <section
        className="banner bg-pattern3 shadow-sm"
        style={{
          background: `url(${patternImage}) repeat-x center center, #F5F5F5`
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
      <section className="why-invest py-120 shadow-sm">
        <div className="container ">
          <div className="section-heading">
            <p className="section-heading__subtitle">Built to help smart investors invest smarter</p>
            <h2 className="section-heading__title">Why Invest in Real Estate?</h2>
          </div>
          <div className="row gy-4 justify-content-center">
            {investCardsData.map((card, index) => (
              <WhyInvestCard key={index} icon={card.icon} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </section>
      <section
        className="latest-property py-120 bg-pattern-bottom-right"
        style={{
          background: `linear-gradient(to top, rgb(245, 245, 245), rgba(255, 255, 255, 0)) 0% 0%, url(${patternImage2}) no-repeat left bottom / 600px 600px, #F5F5F5`
        }}>
        <div className="container">
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
              {properties.map((property, index) => (
                <PropertyCard key={index} {...property} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-us pb-120 pt-60"
        style={{
          background: `linear-gradient(to top, rgb(245, 245, 245), rgba(255, 255, 255, 0)) 0% 0%, url(${patternImage3}) no-repeat right top / 600px 600px, #F5F5F5`
        }}>
        <div className="container ">
          <div className="row align-items-center gy-4">
            <div className="col-md-6">
              <div className="about-us__content">
                <div className="section-heading mb-less style-left">
                  <p className="section-heading__subtitle">About My Square Feet</p>
                  <h2 className="section-heading__title">About Our Real Estate</h2>
                </div>
                <h6 className="about-us__subheading">Finding great properties for investment</h6>
                <div className="about-us__desc">
                  <p>
                    My Square Feet is a unique real estate-based investment platform that allows small and micro investors to easily invest in high return properties
                    secured by blockchain technology. Take your first step towards financial freedom by joining My Square Feet today. My Square Feet provides high return
                    on investment opportunities in the real estate market. You don't have to be an expert to invest with us. Our platform is designed to make investing
                    easy and accessible for everyone.
                  </p>
                </div>
                <a className="btn btn--base" href="about" role="button">
                  Discover More
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center justify-content-lg-end">
                <div className="about-us__wrapper">
                  <img className="about-us__thumb" src="https://www.mysquarefeet.net/assets/images/frontend/about/663f5dddc8a4e1715428829.jpg" alt="about-image" />
                  <div className="floating-card floating-card--one">
                    <div className="floating-card__content">
                      <h3 className="floating-card__title" data-s-break="">
                        16<span>%</span>
                      </h3>
                      <p className="floating-card__text">Average Profit Upto</p>
                    </div>
                  </div>
                  <div className="floating-card floating-card--two">
                    <div className="floating-card__content">
                      <h3 className="floating-card__title" data-s-break="">
                        1K<span>+</span>
                      </h3>
                      <p className="floating-card__text">Investors</p>
                    </div>
                    <img className="floating-card__thumb" src="https://www.mysquarefeet.net/assets/images/frontend/about/663f5ddddcfe81715428829.png" alt="about-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-property py-120">
        <div className="container ">
          <div className="section-heading style-left">
            <p className="section-heading__subtitle">Cities</p>
            <div className="section-heading__wrapper">
              <h2 className="section-heading__title">Explore By Cities</h2>
              <div className="featured-property__arrows">
                <button type="button" className="slick-prev slick-arrow">
                  <i className="las la-angle-left"></i>
                </button>
                <button type="button" className="slick-next slick-arrow">
                  <i className="las la-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex gap-5">
            {cities.map((city, index) => (
              <CityCard key={index} imageUrl={city.imageUrl} cityName={city.cityName} propertiesCount={city.propertiesCount} linkUrl={city.linkUrl} />
            ))}
          </div>
        </div>
      </section>
      <section
        className="all-property py-120 bg-pattern"
        style={{
          background: `linear-gradient(to top, rgb(245, 245, 245), rgba(255, 255, 255, 0)) 0% 0%, url(${patternImage2}) no-repeat left bottom / 600px 600px, #F5F5F5`
        }}>
        <div className="container ">
          <div className="section-heading style-left">
            <p className="section-heading__subtitle">Featured properties</p>
            <div className="section-heading__wrapper">
              <h2 className="section-heading__title">All Properties Spotlight</h2>
              <a className="section-heading__link" href="https://www.mysquarefeet.net/properties">
                <span>Explore</span>
                <i className="las la-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
          <div className="all-property__cards"></div>
        </div>
      </section>
      {/* Testinomial remaining*/}

      <section className="testimonial py-120 ">
        <div className="container">
          <div className="row gy-4 justify-content-lg-between align-items-center">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="latest-blogs py-120 bg-pattern" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div className="section-heading style-left">
            <p className="section-heading__subtitle">Our Blogs</p>
            <div className="section-heading__wrapper">
              <h2 className="section-heading__title">Latest News &amp; Articles</h2>
              <a className="section-heading__link" href="https://www.mysquarefeet.net/blog">
                <span>Explore</span>
                <i className="las la-long-arrow-alt-right"></i>
              </a>
            </div>
          </div>
          <div className="d-flex gap-4 blog__card_wrapper" style={{ width: '96%' }}>
            {blogs.map((blog, index) => (
              <div className="col-sm-6 col-lg-4">
                <BlogCard key={index} image={blog.image} date={blog.date} month={blog.month} title={blog.title} description={blog.description} link={blog.link} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
