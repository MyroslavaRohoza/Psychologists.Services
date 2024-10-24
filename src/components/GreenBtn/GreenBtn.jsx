import css from "./GreenBtn.module.css";
const GreenBtn = ({ children, padding, height, onClick }) => {


  return (
    <button
      className={`${css.greenBtn} btnText ${css.textColor}`}
      style={{ padding: padding, width: padding ? 'auto' : '100%', height: padding || height }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GreenBtn;
