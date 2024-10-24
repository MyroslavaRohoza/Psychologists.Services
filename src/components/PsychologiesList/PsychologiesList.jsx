import css from './PsychologiesList.module.css';
import { nanoid } from 'nanoid';
import PsychologiesListItem from '../PsychologiesListItem/PsychologiesListItem';
import { useBoundStore } from '../../zustand/store';
import { getPsyhologists } from '../../zustand/selectors';


const PsychologiesList = () => {
  const psychologiesArray = useBoundStore(getPsyhologists).psychologistsList;

    console.log(psychologiesArray);
  return (
    <ul className={css.psychologiesList}>
      {Array.isArray(psychologiesArray) &&
        psychologiesArray.map((item) => <PsychologiesListItem key={nanoid()} {...item} />)}
    </ul>
  );
}

export default PsychologiesList