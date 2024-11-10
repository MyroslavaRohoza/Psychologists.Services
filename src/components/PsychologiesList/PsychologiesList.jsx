import css from "./PsychologiesList.module.css";
import PsychologiesListItem from "../PsychologiesListItem/PsychologiesListItem";
import { useBoundStore } from "../../zustand/store";
import { getIsLoading, getPsyhologists } from "../../zustand/selectors";
import Loader from "../Loader/Loader";

const PsychologiesList = () => {
  const psychologiesArray = useBoundStore(getPsyhologists).psychologistsList;
  const loading = useBoundStore(getIsLoading);
  return (
    <ul className={css.psychologiesList}>
      {Array.isArray(psychologiesArray) &&
        psychologiesArray.map((item) => (
          <PsychologiesListItem key={item.id} {...item} />
        ))}
      {loading && <div className={css.loaderContainer}><Loader color="var(--lime-green)" size={30} /></div>}
    </ul>
  );
};

export default PsychologiesList;
