import css from "./Psychologists.module.css";
import { useEffect, useState } from "react";
import PsychologiesList from "../../components/PsychologiesList/PsychologiesList";
import {
  getFilter,
  getPsyhologists,
  getQueryInfo,
} from "../../zustand/selectors";
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
  const loadedAmountOfPsychologists =
    useBoundStore(getPsyhologists).psychologistsListLength;
  const amountOfPsychologists =
    useBoundStore(getQueryInfo).amountOfPsychologists;
  const lastVisible = useBoundStore(getQueryInfo).lastVisible;
  const limit = useBoundStore(getQueryInfo).limit;

  const [isAmountMatching, setIsAmountMatching] = useState(false);

  useEffect(() => {
    checkAmountOfPsychologists(
      loadedAmountOfPsychologists,
      amountOfPsychologists
    );
  }, [loadedAmountOfPsychologists, amountOfPsychologists]);

  const checkAmountOfPsychologists = (
    loadedAmountOfPsychologists,
    amountOfPsychologists
  ) => {
    setIsAmountMatching(loadedAmountOfPsychologists === amountOfPsychologists);
  };

  useEffect(() => {
    fetchPsychologists(queryLimit, queryFilter);
  }, [fetchPsychologists, queryLimit, queryFilter]);

  return (
    <div className={css.psychologistsPageContainer}>
      <SelectFilter />
      <div className={css.psychologiesListContainer}>
        <PsychologiesList />
        {isAmountMatching && (
          <div className={css.noMoreData}>
            No additional records match your request.
          </div>
        )}
        <GreenBtn
          padding={"14px 48px"}
          onClick={() => loadFilteredData(lastVisible, queryFilter, limit)}
          disabled={isAmountMatching}
        >
          Load more
        </GreenBtn>
      </div>
    </div>
  );
};

export default PsychologistsPage;
