import css from "./FormDescription.module.css";

const FormDescription = ({children}) => {
  return (
    <p className={css.description}>
      {children}
    </p>
  );
}

export default FormDescription