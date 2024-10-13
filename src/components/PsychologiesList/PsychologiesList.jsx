import css from './PsychologiesList.module.css';
import { nanoid } from 'nanoid';
import { usePsyhologiesStore } from '../../zustand/selectors';
import PsychologiesListItem from '../PsychologiesListItem/PsychologiesListItem';

const PsychologiesList = () => {
  const psychologiesArray = usePsyhologiesStore.psyhologies.getPsyhologyList();

    console.log(psychologiesArray);
  return (
    <ul className={css.psychologiesList}>
      {Array.isArray(psychologiesArray) &&
        psychologiesArray.map((item) => <PsychologiesListItem key={nanoid()} {...item} />)}
    </ul>
  );
}

export default PsychologiesList