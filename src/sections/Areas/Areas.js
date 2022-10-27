import './areas.scss';

const Areas = ({ list }) => (
  <section className="areas">
    <div className="container">
      <h2 className="section-title">Areas We Serve</h2>

      <ul>
        {list?.map((el, index) => (
          <li key={index}>{el.area_name}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Areas;
