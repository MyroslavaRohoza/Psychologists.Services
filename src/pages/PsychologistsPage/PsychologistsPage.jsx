import css from "./Psychologists.module.css";
import { useEffect } from "react";
import PsychologiesList from "../../components/PsychologiesList/PsychologiesList";
import { getPsyhologiesList } from "../../zustand/selectors";
import { useBoundStore } from "../../zustand/store";
import SelectFilter from "../../components/SelectFilter/SelectFilter";
import { fetchPsychologists } from "../../firebase/uploadData";

const PsychologistsPage = () => {
  useEffect(() => {
    fetchPsychologists();
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
