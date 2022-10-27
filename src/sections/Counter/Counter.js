import './counter.scss';

const Counter = ({ data }) => (
  <section className="counter">
    <div className="container">
      <h2 className="section-title">Why Customers Choose Us</h2>
      <div className="counter__description">
        {data?.description.map((el, index) => (
          <p key={index}>{el.paragraph}</p>
        ))}
      </div>
    </div>
    <div className="counter__wrapper">
      <div className="container">
        <div className="counter__inner">
          <div className="counter__item">
            <p>{data?.years_of_experience || '15+'}</p>
            <span>Years of Experience</span>
          </div>

          <div className="counter__item">
            <p>{data?.satisfied_clients || '1940+'}</p>
            <span>Satisfied Clients</span>
          </div>

          <div className="counter__item">
            <p>{data?.professionals || '20+'}</p>
            <span>Professionals</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Counter;
