import css from './InputField.module.css'

const InputField = ({type, placeholder, inputName, register, required }) => (
  <>
    <input type={type} placeholder={placeholder}  {...register(inputName, { required })} className={css.input}/>
  </>
);

export default InputField