import css from "./FormDescription.module.css";

const FormDescription = ({children, width}) => {
  return (
    <p className={css.description} style={{maxWidth: width}}>
      {children}
    </p>
  );
}

export default FormDescription