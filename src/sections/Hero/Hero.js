import { NavLink } from 'react-router-dom';

import './hero.scss';

const Hero = ({ title, phone, awards }) => (
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
            <img src={el.icon} key={index} alt={`Award #${index + 1}`} />
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

          <a href={`tel:${phone}`} className="hero__coupon--phone">
            {phone}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
