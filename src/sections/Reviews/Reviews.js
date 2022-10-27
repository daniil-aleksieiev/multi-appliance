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

const reviews = [
  {
    resource: 'Google',
    date: '14/06/2021',
    customer_name: 'Cameron Williamson',
    text: 'Great service and described quote on price. Fast service within 1hr. Alex explained everything he was doing in easy to understand words. Great personality and attitude. Gave receipt and his cell number in case there were any further problems. There was a hiccup, he explained and problem resolved over phone. Call him, he quick and professional.',
  },
  {
    resource: 'Google',
    date: '14/06/2021',
    customer_name: 'Cameron Williamson',
    text: 'Great service and described quote on price. Fast service within 1hr. Alex explained everything he was doing in easy to understand words. Great personality and attitude. Gave receipt and his cell number in case there were any further problems. There was a hiccup, he explained and problem resolved over phone. Call him, he quick and professional.',
  },
  {
    resource: 'Facebook',
    date: '10/08/2021',
    customer_name: 'Cameron Williamson',
    text: 'Alex my representative was knowledgeable, courteous,, and found the right air conditioning/furnace for me to save on electricity and be extremely efficient. It is a Carrier hybrid system and two Carrier representatives were at my home most of the day to ensure it was working correctly. Love the system.',
  },
  {
    resource: 'Yelp',
    date: '05/12/2021',
    customer_name: 'Cameron Williamson',
    text: 'Alex my representative was knowledgeable, courteous,, and found the right air conditioning/furnace for me to save on electricity and be extremely efficient. It is a Carrier hybrid system and two Carrier representatives were at my home most of the day to ensure it was working correctly. Love the system.',
  },
];

const Reviews = ({ data }) => (
  <section className="reviews">
    <div className="container">
      <Slider className="reviews__list" {...sliderSettings}>
        {reviews?.map((item, index) => (
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
