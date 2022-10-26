import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Footer } from '../';

import { contacts } from '../../static/contacts';

import './layout.scss';

const Layout = ({ pageId, children }) => {
  const [isVisible, setVisibility] = React.useState(false);

  const handleScroll = () => {
    setVisibility(window.scrollY > 250);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id={pageId}>
      <Header />
      <main>{children}</main>
      <Footer />
      <ToastContainer />
      <div className={`mobile-cta-buttons ${isVisible ? 'on' : 'off'}`}>
        <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
        <Link to="/book-now">Schedule a Service</Link>
      </div>
    </div>
  );
};

export default Layout;
