import css from "./RegistrationForm.module.css";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import GreenBtn from "../GreenBtn/GreenBtn";
import { registerUser } from "../../firebase/register";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import { useBoundStore } from "../../zustand/store";
import { getUserInfo } from "../../zustand/selectors";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  userName: yup.string().required("Name is required!"),
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

const RegistrationForm = () => {
  const isAuth = useBoundStore(getUserInfo).isSignedIn;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const onSubmit = ({ userName, userEmail, userPassword }) => {
    registerUser(userName, userEmail, userPassword);
  };
  useEffect(() => {}, [isAuth]);

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
          <label>
            <InputField
              type="text"
              placeholder="Name"
              inputName="userName"
              register={register}
              required
            />
            {errors.userName && (
              <p className="errorMessage">{errors.userName.message}</p>
            )}
          </label>
          <label>
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
          </label>
          <label>
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
          </label>
        </div>
        <GreenBtn height={"52px"} disabled={isAuth}>
          Sign Up
        </GreenBtn>
      </form>
    </div>
  );
};

export default RegistrationForm;
