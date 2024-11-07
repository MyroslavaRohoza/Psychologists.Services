import css from "./PsychologiesListItem.module.css";
import ReadMore from "../ReadMore/ReadMore";
import star from "../../assets/icons/star.svg";
import heart from "../../assets/icons/heart.svg";
import { ReactSVG } from "react-svg";
import { NavLink, Route, Routes } from "react-router-dom";
import PsychologistDetails from "../PsychologistDetails/PsychologistDetails";
import clsx from "clsx";
import { useBoundStore } from "../../zustand/store";
import {
  getUserInfo,
  selectedPsychologistsIds,
  setModalName,
  setOpen,
  setSelectedPsychologists,
} from "../../zustand/selectors";
import { useEffect, useState, useRef } from "react";

const PsychologiesListItem = ({
  id,
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
  const [heartStyles, setHeartStyles] = useState({
    color: "var(--dark-olive)",
    fill: "var(--light-gray)",
  });

  const isAuth = useBoundStore(getUserInfo).isSignedIn;

  const ref = useRef(null);

  const selectedIdsArr = useBoundStore(selectedPsychologistsIds);
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.readMoreLink, isActive && css.activeNavLink);
  };

  useEffect(() => {
    checkIsSelected(selectedIdsArr, isAuth);
  }, [selectedIdsArr, isAuth]);

  const checkIsSelected = (selectedIdsArr, isAuth) => {
    selectedIdsArr.includes(id) && isAuth
      ? setHeartStyles({
          color: "var(--green-mint)",
          fill: "var(--green-mint)",
        })
      : setHeartStyles({
          color: "var(--dark-olive)",
          fill: "var(--light-gray)",
        });
  };

  const onHeartBtnClick = () => {
    if (isAuth) {
      setSelectedPsychologists(id);
      ref.current.classList.toggle(css.pulse);
    } else {
      setOpen(true);
      setModalName("AuthMessage");
    }
  };
  return (
    <li className={css.psychologiesItem}>
      <span className={css.psychologistAvatarContainer}>
        <div className={css.circle}>
          <div className={css.greenCircle}></div>
        </div>
        <img src={avatar_url} alt={name} className={css.psychologistAvatar} />
      </span>
      <div className={css.nameContainer}>
        <p className={`text-grey ${css.text}`}>Psychologist</p>
        <h2 className={css.name}>{name}</h2>
      </div>
      <div className={css.ratingPriceContainer}>
        <div className={css.ratingContainer}>
          <ReactSVG src={star} />
          <p className={`${css.rating} text-dark-olive`}>Rating: {rating}</p>
        </div>
        <p className={"text-dark-olive"}>
          Price / 1 hour: <span className={css.price}>{price_per_hour}$</span>
        </p>
        <button className={css.heartBtn} onClick={onHeartBtnClick} ref={ref}>
          <ReactSVG
            src={heart}
            beforeInjection={(svg) => {
              svg.setAttribute(
                "style",
                `width: 26px; height: 26px; color: ${heartStyles.color}; fill: ${heartStyles.fill};`
              );
            }}
          />
        </button>
      </div>
      <div className={css.infoContainer}>
        <PsychologistDetails
          experience={experience}
          license={license}
          specialization={specialization}
          initial_consultation={initial_consultation}
        />
        <p className={`text-grey ${css.about}`}>{about}</p>
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
    </li>
  );
};

export default PsychologiesListItem;
