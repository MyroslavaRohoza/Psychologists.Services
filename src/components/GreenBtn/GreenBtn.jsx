import css from "./GreenBtn.module.css";
const GreenBtn = ({ children, padding }) => {
  return (
    <button
      className={`${css.greenBtn} btnText ${css.textColor}`}
      style={{ padding: padding }}
    >
      {children}
    </button>
  );
};

export default GreenBtn;
