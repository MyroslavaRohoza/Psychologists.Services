import css from './LoginBtn.module.css'
const LoginBtn = ({ children }) => {

  const handleClick = () => {
    console.log('click')
  }

  return (
    <button className={`btnText ${css.btn} ${css.textColor}`} onClick={handleClick}>{children}</button>
  )
}

export default LoginBtn