import css from "./LogInForm.module.css";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import GreenBtn from "../GreenBtn/GreenBtn";
import { loginUser } from "../../firebase/login";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import { useBoundStore } from "../../zustand/store";
import { getUserInfo } from "../../zustand/selectors";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const logInSchema = yup.object().shape({
  userEmail: yup
    .string()
    .email("Email is invalid")
    .required("Email is required!"),
  userPassword: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long.")
    .max(64, "Password must be between 8 and 64 characters."),
});

const LogInForm = () => {
  const isAuth = useBoundStore(getUserInfo).isSignedIn;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(logInSchema),
    mode: "onSubmit",
  });
  const onSubmit = ({ userEmail, userPassword }) => {
    console.log("lp");
    loginUser(userEmail, userPassword);
  };
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
          <span>
            <InputField
              type="email"
              placeholder="Email"
              inputName="userEmail"
              register={register}
              required
            />
            {errors.userEmail && (
              <p className="errorMessage">{errors.userEmail.message}</p>
            )}
          </span>
          <span>
            <InputField
              type="password"
              placeholder="Password"
              inputName="userPassword"
              register={register}
              required
            />
            {errors.userPassword && (
              <p className="errorMessage">{errors.userPassword.message}</p>
            )}
          </span>
        </div>
        <GreenBtn height={"52px"} disabled={isAuth}>
          Log In
        </GreenBtn>
      </form>
    </div>
  );
};

export default LogInForm;
