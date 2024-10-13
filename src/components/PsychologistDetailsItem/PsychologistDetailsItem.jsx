import css from "./PsychologistDetailsItem.module.css";
const PsychologistDetailsItem = ({ detail, value }) => {
  return (
    <span className={css.psychologistDetailsItem}>
      <span className={"text-grey"}>{detail}</span>: {value}
    </span>
  );
};

export default PsychologistDetailsItem;
