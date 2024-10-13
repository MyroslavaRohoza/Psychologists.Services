import css from "./PsychologistDetails.module.css";
import { useMemo } from "react";
import PsychologistDetailsItem from "../PsychologistDetailsItem/PsychologistDetailsItem";


const PsychologistDetails = ({ ...details }) => {
  const detailsInfo = useMemo(() => {
    return Object.entries(details).map(([key, value]) => (
      <PsychologistDetailsItem key={key} detail={key} value={value} />
    ));
  }, [details]);

  return <div className={css.psychologistDetails}>{detailsInfo}</div>;
};

export default PsychologistDetails;
