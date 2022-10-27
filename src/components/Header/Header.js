import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { contacts } from '../../static/contacts';
import './header.scss';

const Header = () => {
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
      <HeadLine />

      <Links />
    </header>
  );
};

export default Header;

const HeadLine = () => (
  <div className="page-header__headline">
    <div className="container">
      <span>Serving San Diego and Surrounding Areas</span>

      <a href={`tel:${contacts.phone}`} className="page-header__headline--phone">
        {contacts.phone}
      </a>
    </div>
  </div>
);

const Links = () => (
  <div className="page-header__links">
    <div className="container">
      <Link to="/" className="page-header__logo">
        <img src="/assets/images/logo.svg" alt="header logo" />
      </Link>

      <div>
        <a href={`tel:${contacts.phone}`} className="page-header__links--phone">
          {contacts.phone}
        </a>

        <NavLink to="/book-now" className="red-button" state={{ prevLocation: window.location.pathname.split('/')[1] }}>
          Book a Service
        </NavLink>
      </div>
    </div>
  </div>
);
