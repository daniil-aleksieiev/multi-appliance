import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.scss';

const Header = ({ contacts }) => {
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    setShadow(window.scrollY > 142);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`page-header ${shadow && 'shadow'}`}>
      <HeadLine phone={contacts?.phone} />

      <Links phone={contacts?.phone} />
    </header>
  );
};

export default Header;

const HeadLine = ({ phone }) => (
  <div className="page-header__headline">
    <div className="container">
      <span>Serving Coachella Valley and Surrounding Areas</span>

      <a href={`tel:${phone}`} className="page-header__headline--phone">
        {phone}
      </a>
    </div>
  </div>
);

const Links = ({ phone }) => (
  <div className="page-header__links">
    <div className="container">
      <Link to="/" className="page-header__logo">
        <img src="/assets/images/logo.svg" alt="header logo" />
      </Link>

      <div>
        <a href={`tel:${phone}`} className="page-header__links--phone">
          {phone}
        </a>

        <NavLink to="/book-now" className="red-button" state={{ prevLocation: window.location.pathname.split('/')[1] }}>
          Book a Service
        </NavLink>
      </div>
    </div>
  </div>
);
