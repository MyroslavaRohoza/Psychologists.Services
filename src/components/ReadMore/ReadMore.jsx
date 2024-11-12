import css from "./ReadMore.module.css";
import GreenBtn from "../GreenBtn/GreenBtn";
import Reviews from "../Reviews/Reviews";
import { useCallback } from "react";
import { setAppointmentPsychologists, setModalName, setOpen } from "../../zustand/selectors";

const ReadMore = ({ reviews, psychologistsInfo }) => {
  const onAppointmentBtnClick = useCallback(() => {
    setOpen(true);
    setModalName("Appointment");
    setAppointmentPsychologists(psychologistsInfo);
  }, [setOpen, setModalName]);
  return (
    <div className={css.readMore}>
      <Reviews reviews={reviews} />
      <GreenBtn padding={"14px 32px"} onClick={onAppointmentBtnClick}>
        Make an appointment
      </GreenBtn>
    </div>
  );
};
export default ReadMore;    