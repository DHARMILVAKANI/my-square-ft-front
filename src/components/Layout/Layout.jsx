import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Loader from '../Loader/Loader';

const Layout = ({ children }) => {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer); // Clean up timeout on component unmount
  }, []);
  // Function to toggle navbar state and show/hide the overlay
  const toggleNavbar = () => {
    setIsNavbarExpanded(prevState => !prevState);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={`body-overlay ${isNavbarExpanded ? 'show-overlay' : ''}`} />
          <Header toggleNavbar={toggleNavbar} isNavbarExpanded={isNavbarExpanded} />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
