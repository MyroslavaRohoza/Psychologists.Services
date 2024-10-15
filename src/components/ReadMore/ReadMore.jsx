import css from "./ReadMore.module.css";
import GreenBtn from "../GreenBtn/GreenBtn";
import Reviews from "../Reviews/Reviews";

const ReadMore = ({ reviews }) => {
  return (
    <div className={css.readMore}>
      <Reviews reviews={reviews} />
      <GreenBtn padding={"14px 32px"}>Make an appointment</GreenBtn>
    </div>
  );
};
export default ReadMore;    