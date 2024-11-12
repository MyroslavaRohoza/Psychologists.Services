import css from "./InputField.module.css";
import eye from "../../assets/icons/eye.svg";
import eyeOff from "../../assets/icons/eye-off.svg";
import { ReactSVG } from "react-svg";
import { useState } from "react";
import clsx from "clsx";

const InputField = ({
  type,
  placeholder,
  inputName,
  register,
  required,
  textarea,
  addClass,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const onEyeBtnClick = () => {
    setShowPassword((prev) => !prev);
  };
  return textarea ? (
    <textarea
      name={inputName}
      rows="5"
      maxLength="500"
      placeholder={placeholder}
      {...register(inputName, { required })}
      className={clsx(css.input, css.textarea, addClass && addClass)}
    />
  ) : (
    <div className={type === "password" ? css.inputPasswordContainer : ""}>
      {type === "password" && (
        <button type="button" className={css.eyeBtn} onClick={onEyeBtnClick}>
          <ReactSVG
            src={showPassword ? eye : eyeOff}
            beforeInjection={(svg) => {
              svg.setAttribute(
                "style",
                "width: 20px; height: 20px; color: var(--dark-olive);"
              );
            }}
            className={css.eyeIcon}
          />
        </button>
      )}
      <input
        type={showPassword && type === "password" ? "text" : type}
        placeholder={placeholder}
        {...register(inputName, { required })}
        className={`${css.input} ${addClass && addClass}`}
      />
    </div>
  );
};

export default InputField;
