import css from "./LogInForm.module.css";
import { ReactSVG } from "react-svg";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import GreenBtn from "../GreenBtn/GreenBtn";
import eye from "../../assets/icons/eye.svg";
import eyeOff from "../../assets/icons/eye-off.svg";


const LogInForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <h2 className={css.title}>Log In</h2>
      <p className={css.description}>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={css.formContainer}>
          <div>
            <InputField
              type="email"
              placeholder="Email"
              inputName="userEmail"
              register={register}
              required
            />
            <ReactSVG
              src={eye}
              style={{ fill: "green" }}
              className={css.eyeOffIcon}
              beforeInjection={(svg) => {
                svg.classList.add({
                  [css.eyeOffIcon]: true,});
                svg.setAttribute("style", "width: 20px");
              }}
            />
          </div>

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
    </>
  );
};

export default LogInForm;
