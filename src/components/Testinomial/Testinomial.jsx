import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const testimonials = [
  {
    name: 'Sarah Johnson',
    location: 'Cir. Shiloh, Hawaii',
    testimonial:
      "Exceptional service! The team goes above and beyond to ensure their clients' success. From start to finish, they provided thorough guidance and support, making my investment journey smooth and rewarding.",
    image: 'https://www.mysquarefeet.net/placeholder-image/65x65'
  },
  {
    name: 'Rachel Lewis',
    location: 'Paris',
    testimonial:
      "I've been with this platform for years, and they consistently deliver exceptional results. Their transparent communication and strategic investment advice have earned my trust and loyalty.",
    image: 'https://www.mysquarefeet.net/placeholder-image/65x65'
  },
  {
    name: 'Emily Hughes',
    location: 'Australia',
    testimonial:
      "Five stars all the way! This platform helped me diversify my investment portfolio with real estate, and I couldn't be happier with the results. Trustworthy, knowledgeable, and always available to address any concerns.",
    image: 'https://www.mysquarefeet.net/placeholder-image/65x65'
  },
  {
    name: 'Michael Thompson',
    location: 'Berlin',
    testimonial:
      "I've tried various investment platforms, but none compare to the professionalism and expertise offered here. Their attention to detail and commitment to client satisfaction sets them apart. Highly recommend!",
    image: 'https://www.mysquarefeet.net/placeholder-image/65x65'
  }
];

const TestimonialCard = ({ name, location, testimonial, image }) => (
  <div className="testimonial-card">
    <div className="testimonial-card__wrapper">
      <div className="testimonial-card__content">
        <p className="testimonial-card__desc">{testimonial}</p>
      </div>
      <div className="testimonial-card__info">
        <img className="testimonial-card__thumb" src={image} alt="testimonial" />
        <div className="testimonial-card__details">
          <h6 className="testimonial-card__name">{name}</h6>
          <span className="testimonial-card__country">{location}</span>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <section className="testimonial py-120">
      <div className="container">
        <div className="row gy-4 justify-content-lg-between align-items-center">
          <div className="col-md-5">
            <div className="section-heading style-left">
              <p className="section-heading__subtitle">Investors trust us</p>
              <h2 className="section-heading__title">Trusted by Over 3000+ Investors</h2>
            </div>
          </div>
          <div className="col-md-7 col-lg-6">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} name={testimonial.name} location={testimonial.location} testimonial={testimonial.testimonial} image={testimonial.image} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
