import css from "./AppointmentForm.module.css";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import GreenBtn from "../GreenBtn/GreenBtn";
import { registerUser } from "../../firebase/register";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import YourPsychologists from "../YourPsychologists/YourPsychologists";

const AppointmentForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = ({ userName, userEmail, userPassword }) => {
    registerUser(userName, userEmail, userPassword);
  };

  return (
    <div className={css.appointmentFormContainer}>
      <div className={css.titleDescriptionContainer}>
        <FormTitle>Make an appointment with a psychologists</FormTitle>
        <FormDescription>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </FormDescription>
      </div>
      <YourPsychologists />
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

export default AppointmentForm;
