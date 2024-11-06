import css from "./Favorites.module.css";
import { useBoundStore } from "../../zustand/store";
import PsychologiesListItem from "../../components/PsychologiesListItem/PsychologiesListItem";
import { getSelectedPsyhologists } from "../../zustand/selectors";

const FavoritesPage = () => {
  const selectedPsychologists = useBoundStore(getSelectedPsyhologists);
  return (
    <div>
      {selectedPsychologists.length === 0 ? (
        <div className={css.favorites}>
          <h1 className={css.favoritesText}>
           Please, add a psychologist to your favorites
          </h1>
        </div>
      ) : (
        <ul className={css.psychologiesList}>
          {Array.isArray(selectedPsychologists) &&
            selectedPsychologists.map((item) => (
              <PsychologiesListItem key={item.id} {...item} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
