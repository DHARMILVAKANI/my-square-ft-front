import React from 'react';
import patternImage from '../../assets/thumbs/pattern2-bottom-left.png';
import patternImage2 from '../../assets/thumbs/pattern2-top-right.png';
const Footer = () => {
  return (
    <div>
      <footer
        className="footer bg-pattern2"
        style={{
          background: `url(${patternImage2}) no-repeat top right, url(${patternImage}) no-repeat left bottom, #336699`
        }}>
        <div className="container ">
          <div className="footer-top pt-60">
            <div className="row g-4 g-lg-5">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-item">
                  <a href="https://www.mysquarefeet.net" className="footer-item__logo">
                    <img src="https://www.mysquarefeet.net/assets/images/logo_icon/logo_dark.png" alt="logo-image" />
                  </a>
                  <p className="footer-item__desc">
                    Investing with My Square Feet is secured by blockchain technology. We use the latest security measures to ensure your investments are safe and secure.
                  </p>
                  <ul className="social-list" style={{ paddingLeft: 0 }}>
                    <li className="social-list__item">
                      <a href="https://www.instagram.com/" target="_blank" className="social-list__link">
                        <i className="lab la-instagram"></i>{' '}
                      </a>
                    </li>
                    <li className="social-list__item">
                      <a href="https://www.facebook.com/" target="_blank" className="social-list__link">
                        <i className="lab la-facebook-f"></i>{' '}
                      </a>
                    </li>
                    <li className="social-list__item">
                      <a href="https://twitter.com/" target="_blank" className="social-list__link">
                        <i className="lab la-twitter"></i>{' '}
                      </a>
                    </li>
                    <li className="social-list__item">
                      <a href="https://www.linkedin.com/" target="_blank" className="social-list__link">
                        <i className="lab la-linkedin"></i>{' '}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 col-xsm-6">
                <div className="footer-item">
                  <h6 className="footer-item__title">Quick links</h6>
                  <ul className="footer-menu style-two">
                    <li className="footer-menu__item">
                      <a href="https://www.mysquarefeet.net/blog" className="footer-menu__link">
                        Home
                      </a>
                    </li>
                    <li className="footer-menu__item">
                      <a href="https://www.mysquarefeet.net/blog" className="footer-menu__link">
                        Blog
                      </a>
                    </li>
                    <li className="footer-menu__item">
                      <a href="https://www.mysquarefeet.net/contact" className="footer-menu__link">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-xsm-6">
                <div className="footer-item">
                  <h6 className="footer-item__title">Contact us</h6>
                  <ul className="footer-menu">
                    <li className="footer-menu__item">
                      <span className="footer-menu__link">
                        <i className="fas fa-map-marker-alt"></i> DLF Cyber City, Gurugram, HR
                      </span>
                    </li>
                    <li className="footer-menu__item">
                      <span className="footer-menu__link">
                        <i className="fas fa-envelope"></i> <a href="mailto:info@mysquarefeet.net">info@mysquarefeet.net</a>
                      </span>
                    </li>
                    <li className="footer-menu__item">
                      <span className="footer-menu__link">
                        <i className="fas fa-phone"></i>{' '}
                        <a href="tel:+919713435452" className="text--body" style={{ textDecoration: 'none' }}>
                          +91 9713435452
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="footer-item">
                  <h6 className="footer-item__title">Subscribe for updates</h6>
                  <p className="footer-item__desc">Stay on top of the latest blog posts, news and announcements</p>
                  <form className="subscribe-form" id="subscribeForm">
                    <input className="form--control" type="email" name="email" placeholder="Email Address" />
                    <button className="btn orange_btn btn--sm" type="submit">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright">
              © 2024 <a href="https://www.mysquarefeet.net">MySquareFeet</a>. All Rights Reserved{' '}
            </p>
            <div className="footer-links">
              <a className="footer-link" href="https://www.mysquarefeet.net/policy/privacy-policy">
                Privacy Policy
              </a>
              <a className="footer-link" href="https://www.mysquarefeet.net/policy/terms-of-service">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
