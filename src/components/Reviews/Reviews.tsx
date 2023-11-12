import ScrollCarousel from 'scroll-carousel-react';

import reviewsData from '../../helpers/reviews.json';
import { IconStarFilled } from '@tabler/icons-react';

type Review = {
  name: string;
  img: string;
  review: string;
  stars: string;
};

export const Reviews = () => {
  // Convierte el objeto JSON en un objeto tipado
  const reviews: { [key: string]: Review } = reviewsData;
  return (
    <section className="reviews" id="REVIEWS">
      <div className="reviews__container">
        <h2 className="reviews__title">Reviews</h2>
        <p className="reviews__subtitle">
          Flynanz users are delighted! Check out what they're saying about our app.
        </p>
        <ScrollCarousel autoplaySpeed={8} speed={7} margin={50}>
          {Object.keys(reviews).map((key) => {
            const review = reviews[key];
            return (
              <div className="reviews__item" key={key}>
                <div className="reviews__user">
                  <picture className="reviews__user-image">
                    <img
                      className="reviews__user-innerimage"
                      src={review.img}
                      alt={review.name}
                      loading="lazy"
                    />
                  </picture>
                  <h2 className="reviews__user-name">{review.name}</h2>
                </div>
                <div className="reviews__user-stars">
                  {[...Array(Number(review.stars))].map((_, index) => (
                    <IconStarFilled key={index} />
                  ))}
                </div>
                <p className="reviews__user-review">{review.review}</p>
              </div>
            );
          })}
        </ScrollCarousel>
      </div>
    </section>
  );
};
