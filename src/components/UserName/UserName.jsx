import { ReactSVG } from "react-svg";
import userIcon from "../../assets/icons/userIcon.svg";
const UserName = ({ name }) => {
  return (
    <div>
      <ReactSVG src={userIcon} />
      <span>{name}</span>
    </div>
  );
};

export default UserName;
