import { Link } from 'react-router-dom';

import { contacts } from '../../static/contacts';
import './callToAction.scss';

const CallToAction = () => (
  <section className="cta">
    <div className="container">
      <h2 className="section-title">Need Your Appliance Fixed?</h2>

      <div className="cta__links">
        <Link to="/book-now" className="red-button">
          Book a Service
        </Link>
        <span>
          or call us <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
        </span>
      </div>
    </div>
  </section>
);

export default CallToAction;
