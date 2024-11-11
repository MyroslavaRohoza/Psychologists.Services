import css from "./HomePage.module.css";
import { ReactSVG } from "react-svg";
import GreenBtn from "../../components/GreenBtn/GreenBtn";
import arrow from "../../assets/icons/arrow-up-right2.svg";
import { useCallback } from "react";
import { setModalName, setOpen } from "../../zustand/selectors";

const HomePage = () => {
  const onBtnClick = useCallback(() => {
    setModalName("LogIn");
    setOpen(true);
  });
  return (
    <div className={css.homePageContainer}>
      <div className={css.textContainer}>
        <div>
          <h1 className={css.title}>
            The road to the <span className={css.accent}>depths</span> of the
            human soul
          </h1>
          <p className={css.description}>
            We help you to reveal your potential, overcome challenges <br />
            and find a guide in your own life with the help of our <br />
            experienced psychologists.
          </p>
        </div>
        <GreenBtn padding="18px 50px">
          <span className={css.btnText}>
            Get started
            <ReactSVG
              src={arrow}
              onClick={onBtnClick}
              beforeInjection={(svg) => {
                svg.setAttribute(
                  "style",
                  "height: 18px; fill: var(--light-gray); stroke: var(--light-gray)"
                );
              }}
              className={css.eyeIcon}
            />
          </span>
        </GreenBtn>
      </div>
      <div className={css.imgContainer}>
        <div className={css.questionContainer}>
          <img
            src="src/assets/img/blockQuestion.png"
            alt="question block"
            className={css.block}
          />
          <img
            src="src/assets/img/fa6-solid_question.png"
            className={`${css.questionImg} ${css.question}`}
            alt="question"
          />
        </div>
        <img
          src="src/assets/img/blockPeople.png"
          alt="block"
          className={`${css.peopleBlock} ${css.block}`}
        />
        <img
          src="src/assets/img/psychologist.jpg"
          alt="psychologist"
          className={css.img}
        />
        <img
          src="src/assets/img/experienced_block.png"
          alt="experience"
          className={css.experienceBlock}
        />
      </div>
    </div>
  );
};

export default HomePage;
