import css from "./HomePage.module.css";
import { ReactSVG } from "react-svg";
import GreenBtn from "../../components/GreenBtn/GreenBtn";
import arrow from "../../assets/icons/arrow-up-right2.svg";
import { useCallback } from "react";
import { setModalName, setOpen } from "../../zustand/selectors";
import blockQuestion from "../../assets/img/blockQuestion.png";
import question from "../../assets/img/fa6-solid_question.png";
import blockPeople from "../../assets/img/blockPeople.png";
import psychologist from "../../assets/img/psychologist.jpg";
import experienced from "../../assets/img/experienced_block.png";

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
        <GreenBtn padding="18px 50px" onClick={onBtnClick}>
          <span className={css.btnText}>
            Get started
            <ReactSVG
              src={arrow}
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
          <img src={blockQuestion} alt="question block" className={css.block} />
          <img
            src={question}
            className={`${css.questionImg} ${css.question}`}
            alt="question"
          />
        </div>
        <img
          src={blockPeople}
          alt="block"
          className={`${css.peopleBlock} ${css.block}`}
        />
        <img src={psychologist} alt="psychologist" className={css.img} />
        <img
          src={experienced}
          alt="experience"
          className={css.experienceBlock}
        />
      </div>
    </div>
  );
};

export default HomePage;
