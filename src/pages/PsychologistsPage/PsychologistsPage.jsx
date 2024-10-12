import { useEffect } from "react";
import PsychologiesList from "../../components/PsychologiesList/PsychologiesList";
import { usePsyhologiesStore } from "../../zustand/selectors";
import getData from "../../db";

const PsychologistsPage = () => {
 useEffect(() => {
   getData();
 })

  const psychologiesArray = usePsyhologiesStore.psyhologies.getPsyhologyList();

  console.log(psychologiesArray);
  return (
    <div>
      <PsychologiesList />
    </div>
  );
};

export default PsychologistsPage;
