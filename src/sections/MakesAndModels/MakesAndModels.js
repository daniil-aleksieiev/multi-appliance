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

const models = [
  [
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/logo2-111.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/logo2-777.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/logo2-888.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/logo2-999.png',
  ],
  [
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/logo2-1000.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/logo2-2222.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/logo2-4444.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/logo2-LGLGLG.png',
  ],
  [
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/logo2-thththt.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/w3-copy.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/w5-copy.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/w6-copy.png',
  ],
  [
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/w7-copy.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/w9-copy.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/w10-copy.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/w12-copy.png',
  ],
  [
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/w13-copy.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/w14-copy.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/w16-copy.png',
    'http://control.a-techrepair.com/wp-content/uploads/2022/08/w17-copy.png',
  ],
];

const MakesAndModels = () => (
  <section className="makes-and-models">
    <div className="container">
      <h2 className="section-title">We Fix All Makes & Models</h2>

      <Slider {...sliderSettings} className="makes-and-models__list">
        {models.map((el, index) => (
          <SliderCard data={el} key={index} />
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
        <img src={el} alt={`slide ${index}`} />
      </div>
    ))}
  </div>
);
