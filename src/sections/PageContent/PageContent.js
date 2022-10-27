import './pageContent.scss';

const PageContent = ({ title, content, image }) => (
  <section className="page-content">
    <div className="container">
      <div className="page-content__text">
        <h2 className="section-title">
          Appliance Repair
          <br />
          Experts
        </h2>

        <div>
          <p>
            We offer 90 days warranty on labor and up to 12 months on spare parts as well as our neighborhood promise is
            to provide best possible service, transparent pricing, flexible appointment timing and professional
            expertise. Whatever reason our client is not happy with the quality of services provided by us, we’ll do our
            best to follow up and resolve any issue to customer satisfaction.
          </p>

          <ul>
            <li>Emergency appliance repair</li>
            <li>Leaking refrigerator</li>
            <li>Freezer is not defrosting properly</li>
            <li>Dryer is not heating clothes</li>
            <li>Washing machine not running efficiently</li>
          </ul>
        </div>
      </div>

      <div className="page-content__image">
        <div className="page-content__image--inner">
          <div />
          <img src="/assets/images/content.png" alt={title} />
        </div>
      </div>
    </div>
  </section>
);

export default PageContent;
