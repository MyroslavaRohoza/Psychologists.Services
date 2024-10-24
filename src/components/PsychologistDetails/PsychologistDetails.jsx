import css from "./PsychologistDetails.module.css";
import { useMemo } from "react";
import PsychologistDetailsItem from "../PsychologistDetailsItem/PsychologistDetailsItem";


const PsychologistDetails = ({ ...details }) => {
  const detailsInfo = useMemo(() => {
    return Object.entries(details).map(([key, value]) => (
      <PsychologistDetailsItem key={key} detail={key} value={value} />
    ));
  }, [details]);

  return <ul className={css.psychologistDetails}>{detailsInfo}</ul>;
};

export default PsychologistDetails;
