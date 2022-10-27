import './satisfaction.scss';

const Satisfaction = ({ data }) => (
  <section className="satisfaction">
    <div className="container">
      <h2 className="section-title">
        100% Satisfaction
        <br /> Guaranteed
      </h2>

      <div className="satisfaction__grid">
        {data?.map((el, index) => (
          <div className="satisfaction__grid--item" key={index}>
            <div className="stars">
              <i className="icon-star" />
              <i className="icon-star" />
              <i className="icon-star" />
              <i className="icon-star" />
              <i className="icon-star" />
            </div>

            <hr />

            <div className="reviews_count">
              <img src={el.logo} alt="resource logo" />

              <span>{el.number_of_reviews} reviews</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Satisfaction;
