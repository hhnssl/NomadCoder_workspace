import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
  return (
    <button className={styles.btn}>{text}</button>
  );
}

Button.propTypes = {
  // Button에는 string 이 필요하다고 명시해주는 과정
  text: PropTypes.string.isRequired,
}

export default Button; //App에서 Button을 가져울 수 있게 함 