import React from "react";

const PsychologistDetailsItem = ({ detail, value }) => {
  return (
    <span>
      {detail}
      <p>{value}</p>
    </span>
  );
};

export default PsychologistDetailsItem;
