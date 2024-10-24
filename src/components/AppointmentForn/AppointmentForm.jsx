import css from "./AppointmentForm.module.css";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import GreenBtn from "../GreenBtn/GreenBtn";
import { registerUser } from "../../firebase/register";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import YourPsychologists from "../YourPsychologists/YourPsychologists";

const AppointmentForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userAppointmentDate: "00:00",
    },
  });
  const onSubmit = ({ userName, userEmail, userPassword }) => {
    registerUser(userName, userEmail, userPassword);
  };

  return (
    <div className={css.appointmentFormContainer}>
      <div className={css.titleDescriptionContainer}>
        <FormTitle>
          Make an appointment
          <br /> with a psychologists
        </FormTitle>
        <FormDescription width={"420px"}>
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
          <div className={css.phoneInputContainer}>
            <InputField
              type="tel"
              placeholder="+380"
              inputName="userPhone"
              register={register}
              required
            />
            <InputField
              type="time"
              inputName="userAppointmentDate"
              register={register}
              required
            />
          </div>
          <InputField
            type="email"
            placeholder="Email"
            inputName="userEmail"
            register={register}
            required
          />
          <InputField
            type="text"
            placeholder="Comment"
            inputName="userComment"
            register={register}
            required
            textarea
          />
        </div>
        <GreenBtn height={"52px"}>Sign Up</GreenBtn>
      </form>
    </div>
  );
};

export default AppointmentForm;
