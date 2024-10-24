import css from "./PsychologistDetailsItem.module.css";
const PsychologistDetailsItem = ({ detail, value }) => {
  return (
    <li className={css.psychologistDetailsItem}>
      <span className={"text-grey"}>{detail}</span>: {value}
    </li>
  );
};

export default PsychologistDetailsItem;
