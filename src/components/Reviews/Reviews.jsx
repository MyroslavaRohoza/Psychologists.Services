import { nanoid } from 'nanoid';
import ReviewItem from '../ReviewItem/ReviewItem';
import css from './Reviews.module.css'
const Reviews = ({reviews }) => {
  return (
    <ul className={css.reviewsList}>
      {reviews.map((review) => (
        <ReviewItem key={nanoid()} {...review} />
      ))}
    </ul>
  );
};

export default Reviews