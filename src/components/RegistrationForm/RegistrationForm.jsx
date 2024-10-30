import css from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import GreenBtn from "../GreenBtn/GreenBtn";
import { registerUser } from "../../firebase/register";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import { useBoundStore } from "../../zustand/store";
import { getUserInfo } from "../../zustand/selectors";
import { loadUserInfo } from "../../js/utilities";

const RegistrationForm = () => {
  const isAuth = useBoundStore(getUserInfo).isSignedIn;
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ userName, userEmail, userPassword }) => {
    const user = registerUser(userName, userEmail, userPassword);
    if (user) {
      loadInfo(user);
    }
  };

  const loadInfo = async (user) => {
    loadUserInfo(user);
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
        <GreenBtn height={"52px"} disabled={isAuth}>
          Sign Up
        </GreenBtn>
      </form>
    </div>
  );
};

export default RegistrationForm;
