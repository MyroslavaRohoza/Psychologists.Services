import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePageContainer}>
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
      <div className={css.imgContainer}>
        <div className={css.questionContainer}>
          <img src="src/assets/img/blockQuestion.png" alt="question block" />
          <img
            src="src/assets/img/fa6-solid_question.png"
            className={css.questionImg}
            alt="question"
          />
        </div>
        <img
          src="src/assets/img/blockPeople.png"
          alt="block"
          className={css.peopleBlock}
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
