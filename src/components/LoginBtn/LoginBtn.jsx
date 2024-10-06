import css from './LoginBtn.module.css'
const LoginBtn = ({ children }) => {
  return (
    <button className={`btnText ${css.btn} ${css.textColor}`}>{children}</button>
  )
}

export default LoginBtn