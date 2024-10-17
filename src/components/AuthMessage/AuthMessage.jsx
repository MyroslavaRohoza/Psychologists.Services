import FormDescription from "../FormDescription/FormDescription";
import FormTitle from "../FormTitle/FormTitle";
import GreenBtn from "../GreenBtn/GreenBtn";
import LoginBtn from "../LoginBtn/LoginBtn";

const AuthMessage = () => {
  return (
    <div>
      <FormTitle>This feature is for authorised users only</FormTitle>
      <LoginBtn>Log in</LoginBtn>
      <GreenBtn padding="14px 40px">Register</GreenBtn>
    </div>
  );
};

export default AuthMessage;
