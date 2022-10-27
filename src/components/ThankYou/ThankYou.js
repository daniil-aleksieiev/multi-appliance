import { NavLink } from 'react-router-dom';

import './thanks.scss';

const ThankYou = () => (
  <div className="thanks-wrapper">
    <div className="container">
      <h2 className="section-title">Thank You!</h2>
      <p className="subtitle">We’ll respond to your request shortly!</p>
      <p>Looking forward to serving you!</p>

      <NavLink to="/" className="red-button">
        Back To Home Page
      </NavLink>
    </div>
  </div>
);

export default ThankYou;
