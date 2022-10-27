import Slider from 'react-slick';
import './reviews.scss';

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Reviews = ({ data }) => (
  <section className="reviews">
    <div className="container">
      <Slider className="reviews__list" {...sliderSettings}>
        {data?.map((item, index) => (
          <ReviewCard {...{ review: item, key: index }} />
        ))}
      </Slider>
    </div>
  </section>
);

export default Reviews;

const ReviewCard = ({ review }) => {
  let icon;

  switch (review.resource) {
    case 'Facebook':
      icon = '/assets/images/logos/fb_line.svg';
      break;
    case 'Yelp':
      icon = '/assets/images/logos/yelp_line.svg';
      break;
    default:
      icon = '/assets/images/logos/google_line.svg';
      break;
  }

  return (
    <div className="reviews__list--card">
      <div className="reviews__list--card__header">
        <div className="reviews__list--card__header--resource">
          <img src={icon} alt={review.resource} />
        </div>
        <div className="reviews__list--card__header--info">
          <span className="reviews__list--card__name">{review.customer_name}</span>
          <span className="reviews__list--card__date">{review.date}</span>
        </div>
      </div>
      <div className="reviews__list--card__stars">
        <i className="icon-star" />
        <i className="icon-star" />
        <i className="icon-star" />
        <i className="icon-star" />
        <i className="icon-star" />
      </div>
      <div className="reviews__list--card__body">
        <p>{review.text}</p>
      </div>
    </div>
  );
};
