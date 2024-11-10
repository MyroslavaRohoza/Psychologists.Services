import css from "./Loader.module.css";
import CircularProgress from "@mui/material/CircularProgress";
const Loader = ({ color, size }) => {
  return (
    <div className={css.loaderContainer}>
      <CircularProgress size={size} sx={{ color: color }} />
    </div>
  );
};

export default Loader;
