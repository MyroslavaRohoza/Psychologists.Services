
const PsychologistDetailsItem = ({ detail, value }) => {
  return (
    <span>
      <p className={"text-grey"}>{detail}</p>
      {value}
    </span>
  );
};

export default PsychologistDetailsItem;
