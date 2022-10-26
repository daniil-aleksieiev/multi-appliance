import './counter.scss';

const Counter = () => (
  <section className="counter">
    <div className="container">
      <h2 className="section-title">Why Customers Choose Us</h2>

      <div className="counter__description">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>

        <p>
          Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div className="counter__wrapper">
      <div className="container">
        <div className="counter__inner">
          <div className="counter__item">
            <p>15+</p>
            <span>Years of Experience</span>
          </div>

          <div className="counter__item">
            <p>1940+</p>
            <span>Satisfied Clients</span>
          </div>

          <div className="counter__item">
            <p>20+</p>
            <span>Professionals</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Counter;
