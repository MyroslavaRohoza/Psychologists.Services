import css from "./YourPsychologists.module.css";
import { useBoundStore } from "../../zustand/store";
import { getAppointmentPsychologists } from "../../zustand/selectors";

const YourPsychologists = () => {
  const psychologist = useBoundStore(getAppointmentPsychologists);

  return (
    <div className={css.container}>
      <img
        src={psychologist?.avatar_url}
        alt={psychologist?.name}
        className={css.avatar}
      />
      <div>
        <p className={`${css.psychologisText} text-grey`}>Your psychologist</p>
        <p>{psychologist?.name}</p>
      </div>
    </div>
  );
};

export default YourPsychologists;
