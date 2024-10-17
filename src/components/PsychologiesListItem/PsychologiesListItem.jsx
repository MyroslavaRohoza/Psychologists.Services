import css from "./PsychologiesListItem.module.css";
import ReadMore from "../ReadMore/ReadMore";
import star from "../../assets/icons/star.svg";
import heart from "../../assets/icons/heart.svg";
import { ReactSVG } from "react-svg";
import { NavLink, Route, Routes } from "react-router-dom";
import PsychologistDetails from "../PsychologistDetails/PsychologistDetails";
import clsx from "clsx";

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
  reviews,
}) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.readMoreLink, isActive && css.activeNavLink);
  };

  return (
    <li className={css.psychologiesItem}>
      <div className={css.psychologistAvatarContainer}>
        <div className={css.circle}>
          <div className={css.greenCircle}></div>
        </div>
        <img src={avatar_url} alt={name} className={css.psychologistAvatar} />
      </div>
      <div className={css.psychologistInfoContainer}>
        <div className={css.psychologistInfo}>
          <div>
            <p className={`text-grey ${css.type}`}>Psychologist</p>
            <h2 className={css.name}>{name}</h2>
          </div>
          <div className={css.ratingPriceContainer}>
            <div className={css.ratingContainer}>
              <ReactSVG src={star} />
              <p className={`${css.rating} text-dark-olive`}>
                Rating: {rating}
              </p>
            </div>
            <div className={css.priceContainer}>
              <p className={"text-dark-olive"}>
                Price / 1 hour:{" "}
                <span className={css.price}>{price_per_hour}$</span>
              </p>
              <button className={css.heartBtn}>
                <ReactSVG
                  src={heart}
                  beforeInjection={(svg) => {
                    svg.setAttribute(
                      "style",
                      "width: 26px; height: 26px; color: var(--dark-olive); fill: var(--light-gray);"
                    );
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <div>
          <PsychologistDetails
            experience={experience}
            license={license}
            specialization={specialization}
            initial_consultation={initial_consultation}
          />
          <p className={`text-grey ${css.about}`}>{about}</p>
          <div>
            <NavLink to={`${name}/reviews`} className={buildLinkClass}>
              Read more
            </NavLink>
            <Routes>
              <Route
                path={`${name}/reviews`}
                element={
                  <ReadMore
                    reviews={reviews}
                    psychologistsInfo={{ name, avatar_url }}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PsychologiesListItem;
