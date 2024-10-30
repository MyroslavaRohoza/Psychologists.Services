import css from "./LogInForm.module.css";
import { ReactSVG } from "react-svg";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import GreenBtn from "../GreenBtn/GreenBtn";
import eye from "../../assets/icons/eye.svg";
import eyeOff from "../../assets/icons/eye-off.svg";
import { loginUser } from "../../firebase/login";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import { useBoundStore } from "../../zustand/store";
import { getUserInfo } from "../../zustand/selectors";

const LogInForm = () => {
  const isAuth = useBoundStore(getUserInfo).isSignedIn;
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ userEmail, userPassword }) =>
    loginUser(userEmail, userPassword);
  return (
    <div className={css.logInFormContainer}>
      <div>
        <FormTitle>Log In</FormTitle>
        <FormDescription width={"390px"}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </FormDescription>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formContainer}>
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
        <GreenBtn height={"52px"} disabled={isAuth}>Sign Up</GreenBtn>
      </form>
    </div>
  );
};

export default LogInForm;
