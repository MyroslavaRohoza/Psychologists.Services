import { nanoid } from 'nanoid';
import { usePsyhologiesStore } from '../../zustand/selectors';
import PsychologiesListItem from '../PsychologiesListItem/PsychologiesListItem';

const PsychologiesList = () => {
  const psychologiesArray = usePsyhologiesStore.psyhologies.getPsyhologyList();

    console.log(psychologiesArray);
  return (
    <ul>
      {Array.isArray(psychologiesArray) &&
        psychologiesArray.map((item) => <PsychologiesListItem key={nanoid()} {...item} />)}
    </ul>
  );
}

export default PsychologiesList