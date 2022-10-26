import { NavLink } from 'react-router-dom';

import { contacts } from '../../static/contacts';
import './hero.scss';

const awards = [
  '/assets/images/awards/1.svg',
  '/assets/images/awards/2.svg',
  '/assets/images/awards/3.svg',
  '/assets/images/awards/4.svg',
  '/assets/images/awards/5.svg',
];

const Hero = ({ title }) => (
  <section className="hero">
    <div className="container">
      <div className="hero__content">
        <h1>
          Rated #1
          <br />
          {title} Services
          <br />
          in San Diego
        </h1>

        <div className="hero__awards">
          {awards.map((el, index) => (
            <img src={el} key={index} alt="home advisor" />
          ))}
        </div>

        <NavLink to="/book-now" className="red-button" state={{ prevLocation: window.location.pathname.split('/')[1] }}>
          Book a Service
        </NavLink>
      </div>

      <div className="hero__coupon">
        <div className="hero__coupon--inner">
          <p>$25 OFF</p>

          <span>
            New Customers
            <br />& Senior
          </span>

          <img src="/assets/images/coupon-decor.svg" alt="coupon decor" />

          <NavLink
            to="/book-now"
            className="red-button"
            state={{ prevLocation: window.location.pathname.split('/')[1] }}
          >
            Book Now
          </NavLink>

          <a href={`tel:${contacts.phone}`} className="hero__coupon--phone">
            {contacts.phone}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
