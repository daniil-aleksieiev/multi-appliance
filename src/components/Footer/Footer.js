import { Link, NavLink } from 'react-router-dom';

import './footer.scss';

const Footer = ({ contacts, social_networks }) => (
  <footer className="page-footer">
    <div className="container">
      <div className="page-footer__inner">
        <div>
          <Link to="/" className="page-footer__logo">
            <img src="/assets/images/logo_colored.svg" alt="footer logo" />
          </Link>

          {/* <p>FOLLOW US</p>

          <div className="page-footer__social">
            <a href={social_networks?.google} target="_blank" rel="noReferrer">
              <i className="icon-google" />
            </a>
            <a href={social_networks?.facebook} target="_blank" rel="noReferrer">
              <i className="icon-facebook" />
            </a>
            <a href={social_networks?.yelp} target="_blank" rel="noReferrer">
              <i className="icon-yelp" />
            </a>
          </div> */}
        </div>

        <div className="page-footer__contacts">
          <a href={`tel:${contacts?.phone}`}>{contacts?.phone}</a>

          <a href={`mailto:${contacts?.email}`}>{contacts?.email}</a>
        </div>
      </div>
    </div>
    <Underline />
  </footer>
);

export default Footer;

const Underline = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="page-footer__underline">
      <div className="container">
        <div>
          <span>
            ©{currentYear} Fix Crew Appliance. Home and Commercial Cervices.
            <br className="mobile-br" /> All Rights Reserved.
          </span>

          <div className="page-footer__underline--links">
            <NavLink to="/privacy-policy">Privacy Policy</NavLink>

            <NavLink to="/accessibility-statement">Accessibility Statement</NavLink>

            <NavLink to="/terms-of-use">Terms of Use</NavLink>
          </div>
        </div>

        <a href="https://toporin.com" target="_blank" rel="noReferrer">
          Designed by <strong>Toporin Studio®</strong> in California
        </a>
      </div>
    </div>
  );
};
