import css from './InputField.module.css'

// const InputField = (type, placeholder, inputName, register, required) => {
   
//   return (
//     <input
//           type={type}
//            className={css.input}
//           placeholder={placeholder}
//           name={inputName}
//       {...register(inputName, { required })}
     
//     />
//   );
// }


const InputField = ({type, placeholder, inputName, register, required }) => (
  <>
    
    <input type={type} placeholder={placeholder}  {...register(inputName, { required })} className={css.input}/>
  </>
);

export default InputField