import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.notFoundPage}>
      <h1 className={css.notFoundMessage}>This page does not exist</h1>
    </div>
  );
};
export default NotFoundPage;
