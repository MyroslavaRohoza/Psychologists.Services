import { useEffect } from "react";
import PsychologiesList from "../../components/PsychologiesList/PsychologiesList";
import { getPsyhologiesList } from "../../zustand/selectors";
import getData from "../../db";
import { useBoundStore } from "../../zustand/store";

const PsychologistsPage = () => {
 useEffect(() => {
   getData();
 })

  const psychologiesArray = useBoundStore(getPsyhologiesList);

  console.log(psychologiesArray);
  return (
    <div>
      <PsychologiesList />
    </div>
  );
};

export default PsychologistsPage;
