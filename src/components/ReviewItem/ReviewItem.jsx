import star from "../../assets/icons/star.svg";
import { ReactSVG } from "react-svg";
import css from "./ReviewItem.module.css";

const ReviewItem = ({ reviewer, rating, comment }) => {
  return (
    <li className={css.reviewItem}>
      <div className={css.reviewInfo}>
        <div className={css.circle}>
          <span className={css.circleText}>{reviewer.charAt(0)}</span>
        </div>
        <div className={`text-dark-olive ${css.reviewInfoText}`}>
          <span>{reviewer}</span>
          <div className={css.ratingContainer}>
            <ReactSVG src={star} />
            <span>{rating}</span>
          </div>
        </div>
      </div>
      <p className={`text-grey ${css.comment}`}>{comment}</p>
    </li>
  );
};

export default ReviewItem;
