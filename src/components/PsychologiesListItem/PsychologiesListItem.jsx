import css from "./PsychologiesListItem.module.css";
import { Link } from "react-router-dom";
import PsychologistDetails from "../PsychologistDetails/PsychologistDetails";

const PsychologiesListItem = ({
  avatar_url,
  name,
  rating,
  price_per_hour,
  experience,
  license,
  specialization,
  initial_consultation,
  about,
}) => {
  return (
    <li className={css.psychologiesItem}>
      <div className={css.psychologistAvatarContainer}>
        <div className={css.circle}>
          <div className={css.greenCircle}></div>
        </div>
        <img src={avatar_url} alt={name} className={css.psychologistAvatar} />
      </div>
      <div>
        <div>
          <p>Psychologist</p>
          <h2>{name}</h2>
        </div>
        <div>
          <span>🟡</span>
          <p>Rating: {rating}</p>

          <p>
            Price / 1 hour: <span>{price_per_hour}</span>
          </p>
          <button>💚</button>
        </div>
        <PsychologistDetails
          experience={experience}
          license={license}
          specialization={specialization}
          initial_consultation={initial_consultation}
        />
        <p>{about}</p>
        <Link>Read more</Link>
      </div>
    </li>
  );
};

export default PsychologiesListItem;
