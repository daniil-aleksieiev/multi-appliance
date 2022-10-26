import './whyWe.scss';

const grid = [
  {
    title: 'Certified<br/>Technicians',
    icon: '/assets/images/icons/experts.svg',
    description:
      'Our team has certified and extensively trained technicians with years of experience troubleshooting even the most challenging appliance problems.',
  },
  {
    title: 'Excellent<br/>Service',
    icon: '/assets/images/icons/service.svg',
    description:
      'We do the job right the first time and with a smile on our faces. Only a sterling reputation in providing high-quality solutions of appliance services to our customers.',
  },
  {
    title: 'Transparent<br/>Pricing',
    icon: '/assets/images/icons/pricing.svg',
    description:
      'Our quotes are fixed and fair. We always do our best to keep our promise in terms of the time needed for work to be done and the money you will have to pay after the work is done.',
  },
];

const WhyWe = ({ title }) => (
  <section className="why-we">
    <div className="container">
      <h2 className="section-title">Why Multi Appliance?</h2>

      <div className="why-we__grid">
        {grid.map((el, index) => (
          <GridItem data={el} key={index} />
        ))}
      </div>
    </div>
  </section>
);

export default WhyWe;

const GridItem = ({ data }) => (
  <div className="why-we__grid--item">
    <div className="why-we__grid--item__title">
      <div>
        <img src={data.icon} alt={data.title} />
      </div>
      <h4 dangerouslySetInnerHTML={{ __html: data.title }} />
    </div>
    <p>{data.description}</p>
  </div>
);
