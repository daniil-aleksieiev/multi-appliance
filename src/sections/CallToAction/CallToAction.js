import { Link } from 'react-router-dom';

import './callToAction.scss';

const CallToAction = ({ title, phone }) => (
  <section className="cta">
    <div className="container">
      <h2 className="section-title">Need Your {title.split(' ')[0]} Fixed?</h2>

      <div className="cta__links">
        <Link to="/book-now" className="red-button">
          Book a Service
        </Link>
        <span>
          or call us <a href={`tel:${phone}`}>{phone}</a>
        </span>
      </div>
    </div>
  </section>
);

export default CallToAction;
