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

const LogInForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ userEmail, userPassword }) =>
    loginUser(userEmail, userPassword);
  return (
    <div className={css.logInFormContainer}>
      <div>
        <FormTitle>Log In</FormTitle>
        <FormDescription>
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
          <div className={css.inputPasswordContainer}>
            <InputField
              type="password"
              placeholder="Password"
              inputName="userPassword"
              register={register}
              required
            />
            <button type="button" className={css.eyeBtn}>
              <ReactSVG
                src={eyeOff}
                beforeInjection={(svg) => {
                  svg.setAttribute(
                    "style",
                    "width: 20px; height: 20px; color: var(--dark-olive);"
                  );
                }}
                className={css.eyeIcon}
              />
            </button>
          </div>
        </div>
        <GreenBtn height={"52px"}>Sign Up</GreenBtn>
      </form>
    </div>
  );
};

export default LogInForm;
