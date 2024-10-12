import PsychologistDetailsItem from "../PsychologistDetailsItem/PsychologistDetailsItem";

const PsychologistDetails = ({ ...details }) => {
  const detailsInfo = (details) => {
    for (let key in details) {
      return <PsychologistDetailsItem detail={key} value={details[key]} />;
    }
  };
  return <div>{detailsInfo(details)}</div>;
};

export default PsychologistDetails;
