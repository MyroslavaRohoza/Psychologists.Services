import css from "./Psychologists.module.css";
import { useEffect } from "react";
import PsychologiesList from "../../components/PsychologiesList/PsychologiesList";
import { getFilter, getQueryInfo } from "../../zustand/selectors";
import { useBoundStore } from "../../zustand/store";
import SelectFilter from "../../components/SelectFilter/SelectFilter";

import {
  fetchPsychologists,
  loadFilteredData,
} from "../../firebase/uploadData";

import GreenBtn from "../../components/GreenBtn/GreenBtn";

const PsychologistsPage = () => {
  const queryFilter = useBoundStore(getFilter);
  const queryLimit = useBoundStore(getQueryInfo).limit;
  console.log(queryLimit, queryFilter);

  useEffect(() => {
    fetchPsychologists(queryLimit, queryFilter);
  }, [fetchPsychologists, queryLimit, queryFilter]);


  const lastVisible = useBoundStore(getQueryInfo).lastVisible;
  const limit = useBoundStore(getQueryInfo).limit;



  return (
    <div className={css.psychologistsPageContainer}>
      <SelectFilter />
      <div className={css.psychologiesListContainer}>
        <PsychologiesList />

        <GreenBtn
          padding={"14px 48px"}
          onClick={() => loadFilteredData(lastVisible, queryFilter, limit)}
        >
          Load more
        </GreenBtn>

      </div>
    </div>
  );
};

export default PsychologistsPage;
