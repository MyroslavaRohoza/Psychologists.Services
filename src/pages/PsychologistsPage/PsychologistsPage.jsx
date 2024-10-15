import css from "./Psychologists.module.css";
import { useEffect } from "react";
import PsychologiesList from "../../components/PsychologiesList/PsychologiesList";
import { getPsyhologiesList } from "../../zustand/selectors";
import { useBoundStore } from "../../zustand/store";
import getData from "../../firebase/db";
import SelectFilter from "../../components/SelectFilter/SelectFilter";

const PsychologistsPage = () => {
  useEffect(() => {
    getData();
  }, []);

  const psychologiesArray = useBoundStore(getPsyhologiesList);

  console.log(psychologiesArray);
  return (
    <div className={css.psychologistsPageContainer}>
      <SelectFilter />
      <PsychologiesList />
    </div>
  );
};

export default PsychologistsPage;
