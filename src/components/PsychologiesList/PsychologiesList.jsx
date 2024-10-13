import css from './PsychologiesList.module.css';
import { nanoid } from 'nanoid';
import { getPsyhologiesList} from '../../zustand/selectors';
import PsychologiesListItem from '../PsychologiesListItem/PsychologiesListItem';
import { useBoundStore } from '../../zustand/store';

const PsychologiesList = () => {
  const psychologiesArray = useBoundStore(getPsyhologiesList);

    console.log(psychologiesArray);
  return (
    <ul className={css.psychologiesList}>
      {Array.isArray(psychologiesArray) &&
        psychologiesArray.map((item) => <PsychologiesListItem key={nanoid()} {...item} />)}
    </ul>
  );
}

export default PsychologiesList