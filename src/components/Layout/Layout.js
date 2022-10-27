import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from 'react-fetch-hook';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Footer, Spinner } from '../';

import './layout.scss';

const ADMIN_URL = 'https://admin.fixcrewappliance.com/wp-json/wp/v2';

const Layout = ({ pageId, children }) => {
  const [isVisible, setVisibility] = useState(false);
  const [pageData, setPageData] = useState();

  const { isLoading, data } = useFetch(`${ADMIN_URL}/page-settings?slug=settings`);

  const handleScroll = () => {
    setVisibility(window.scrollY > 250);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (data) {
      setPageData(data[0].acf);
    }
  }, [data]);

  if (isLoading) return <Spinner />;

  return (
    <div id={pageId}>
      <Header contacts={pageData?.contacts} />
      <main>{children}</main>
      <Footer contacts={pageData?.contacts} social_networks={pageData?.social_networks} />
      <ToastContainer />
      <div className={`mobile-cta-buttons ${isVisible ? 'on' : 'off'}`}>
        <a href={`tel:${pageData?.contacts.phone}`}>{pageData?.contacts.phone}</a>
        <Link to="/book-now">Schedule a Service</Link>
      </div>
    </div>
  );
};

export default Layout;
