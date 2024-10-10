import css from "./GreenBtn.module.css";
const GreenBtn = ({ children, padding, height }) => {
  return (
    <button
      className={`${css.greenBtn} btnText ${css.textColor}`}
      style={{ padding: padding, width: padding ? 'auto' : '100%', height: padding || height}}
    >
      {children}
    </button>
  );
};

export default GreenBtn;
