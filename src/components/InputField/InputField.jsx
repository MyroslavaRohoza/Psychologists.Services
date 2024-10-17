import css from "./InputField.module.css";
import eye from "../../assets/icons/eye.svg";
import eyeOff from "../../assets/icons/eye-off.svg";
import { ReactSVG } from "react-svg";
import { useState } from "react";

const InputField = ({
  type,
  placeholder,
  inputName,
  register,
  required,
  textarea,
  addClass,
}) => {
  const [passwordInputType, setPasswordInputType] = useState(type);
  const onEyeBtnClick = () => {
    if (passwordInputType === "password") {
      setPasswordInputType("text");
    } else {
      setPasswordInputType("password");
    }
    console.log(passwordInputType);
  };

  return textarea ? (
    <textarea
      name={inputName}
      rows="5"
      maxLength="500"
      placeholder={placeholder}
      {...register(inputName, { required })}
      className={`${css.input} ${css.textarea} ${addClass && addClass}`}
    />
  ) : (
    <>
      {/* {type === "password" && (
      <button type="button" className={css.eyeBtn} onClick={onEyeBtnClick}>
        <ReactSVG
          src={passwordInputType === "password" ? eyeOff : eye}
          beforeInjection={(svg) => {
            svg.setAttribute(
              "style",
              "width: 20px; height: 20px; color: var(--dark-olive);"
            );
          }}
          className={css.eyeIcon}
        />
      </button>
    )} */}
      <input
        type={passwordInputType}
        placeholder={placeholder}
        {...register(inputName, { required })}
        className={`${css.input} ${addClass && addClass}`}
      />
    </>
  );
};
export default InputField;
