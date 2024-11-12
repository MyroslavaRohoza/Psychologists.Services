import css from "./AppointmentForm.module.css";
import { useForm } from "react-hook-form";
import InputField from "../InputField/InputField";
import GreenBtn from "../GreenBtn/GreenBtn";
import { registerUser } from "../../firebase/register";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import YourPsychologists from "../YourPsychologists/YourPsychologists";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  userName: yup.string().required("Name is required!"),
  userEmail: yup
    .string()
    .email("Email is invalid")
    .required("Email is required!"),
  userPhone: yup
    .number("Please, enter a number")
    .typeError("Please, enter a number")
    .required("Phone is required!"),
  userComment: yup
    .string()
    .min(5, "Comment must be at least 5 characters long.")
    .max(500, "Comment cannot exceed 500 characters."),
});

const AppointmentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userAppointmentDate: "00:00",
    },
    resolver: yupResolver(schema),
    mode: "onSubmit",
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
          <span>
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
          </span>
          <div className={css.phoneInputContainer}>
            <span>
              <InputField
                type="tel"
                placeholder="+380"
                inputName="userPhone"
                register={register}
                required
              />
              {errors.userPhone && (
                <p className="errorMessage">{errors.userPhone.message}</p>
              )}
            </span>
            <span>
              <InputField
                type="time"
                inputName="userAppointmentDate"
                register={register}
                required
              />
            </span>
          </div>
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
          <span>
            <InputField
              type="text"
              placeholder="Comment"
              inputName="userComment"
              register={register}
              required
              textarea
            />
            {errors.userComment && (
              <p className="errorMessage">{errors.userComment.message}</p>
            )}
          </span>
        </div>
        <GreenBtn height={"52px"}>Sign Up</GreenBtn>
      </form>
    </div>
  );
};

export default AppointmentForm;
