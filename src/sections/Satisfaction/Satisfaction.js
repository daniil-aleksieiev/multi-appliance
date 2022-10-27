import './satisfaction.scss';

const reviews = [
  {
    logo: '/assets/images/logos/google_colored.svg',
    reviews: 102,
  },
  {
    logo: '/assets/images/logos/fb_colored.svg',
    reviews: 256,
  },
  {
    logo: '/assets/images/logos/yelp_colored.svg',
    reviews: 202,
  },
];

const Satisfaction = () => (
  <section className="satisfaction">
    <div className="container">
      <h2 className="section-title">
        100% Satisfaction
        <br /> Guaranteed
      </h2>

      <div className="satisfaction__grid">
        {reviews.map((el, index) => (
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

              <span>{el.reviews} reviews</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Satisfaction;
