import css from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import GreenBtn from "../GreenBtn/GreenBtn";
import { registerUser } from "../../firebase/register";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";

const RegistrationForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ userName, userEmail, userPassword }) => {
    registerUser(userName, userEmail, userPassword);
  };

  return (
    <div className={css.registrationFormContainer}>
      <div>
        <FormTitle>Registration</FormTitle>
        <FormDescription width={"390px"}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </FormDescription>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formContainer}>
          <InputField
            type="text"
            placeholder="Name"
            inputName="userName"
            register={register}
            required
          />
          <InputField
            type="email"
            placeholder="Email"
            inputName="userEmail"
            register={register}
            required
          />
          <InputField
            type="password"
            placeholder="Password"
            inputName="userPassword"
            register={register}
            required
          />
        </div>
        <GreenBtn height={"52px"}>Sign Up</GreenBtn>
      </form>
    </div>
  );
};

export default RegistrationForm;
