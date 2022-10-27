import './whyWe.scss';

const WhyWe = ({ data }) => (
  <section className="why-we">
    <div className="container">
      <h2 className="section-title">Why Multi Appliance?</h2>

      <div className="why-we__grid">
        {data?.map((el, index) => (
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
