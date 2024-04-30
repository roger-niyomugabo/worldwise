import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
