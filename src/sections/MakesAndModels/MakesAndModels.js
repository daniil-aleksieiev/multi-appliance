import Slider from 'react-slick';
import './makesAndModels.scss';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const MakesAndModels = ({ data }) => (
  <section className="makes-and-models">
    <div className="container">
      <h2 className="section-title">We Fix All Makes & Models</h2>

      <Slider {...sliderSettings} className="makes-and-models__list">
        {data?.map((el, index) => (
          <SliderCard data={el.slide} key={index} />
        ))}
      </Slider>
    </div>
  </section>
);

export default MakesAndModels;

const SliderCard = ({ data }) => (
  <div className="makes-and-models__list--item">
    {data.map((el, index) => (
      <div key={index}>
        <img src={el.logo} alt={`slide ${index}`} />
      </div>
    ))}
  </div>
);
