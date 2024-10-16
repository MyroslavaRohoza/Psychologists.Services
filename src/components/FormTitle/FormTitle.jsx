import css from './FormTitle.module.css';

const FormTitle = ({children}) => {
  return <h2 className={css.title}>{children}</h2>;
}

export default FormTitle