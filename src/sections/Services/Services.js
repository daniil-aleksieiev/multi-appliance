import { Link } from 'react-router-dom';
import './services.scss';

const services = [
  {
    title: 'Refrigerator<br/>Repair',
    icon: '/assets/images/services/refrigerator.svg',
    link: '/refrigerator-repair',
  },
  {
    title: 'Freezer<br/>Repair',
    icon: '/assets/images/services/freezer.svg',
    link: '/freezer-repair',
  },
  {
    title: 'Dryer<br/>Repair',
    icon: '/assets/images/services/dryer.svg',
    link: '/dryer-repair',
  },
  {
    title: 'Washer<br/>Repair',
    icon: '/assets/images/services/washer.svg',
    link: '/washer-repair',
  },
  {
    title: 'Oven<br/>Repair',
    icon: '/assets/images/services/oven.svg',
    link: '/oven-repair',
  },
  {
    title: 'Stove<br/>Repair',
    icon: '/assets/images/services/stove.svg',
    link: '/stove-repair',
  },
  {
    title: 'Dishwasher<br/>Repair',
    icon: '/assets/images/services/dishwasher.svg',
    link: '/dishwasher-repair',
  },
  {
    title: 'Ice Machine<br/>Repair',
    icon: '/assets/images/services/ice-machine.svg',
    link: '/ice-machine-repair',
  },
  {
    title: 'Range<br/>Repair',
    icon: '/assets/images/services/range.svg',
    link: '/range-repair',
  },
];

const Services = () => (
  <section className="services">
    <div className="container">
      <h2 className="section-title">Our Appliance Serviced</h2>

      <div className="services__grid">
        {services.map((el, index) => (
          <GridItem key={index} data={el} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;

const GridItem = ({ data }) => (
  <Link to={data.link} className="services__grid--item">
    <div className="services__grid--item__icon">
      <img src={data.icon} alt={data.title} />
    </div>
    <h5 dangerouslySetInnerHTML={{ __html: data.title }} />
  </Link>
);
