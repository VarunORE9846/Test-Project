import PropTypes from 'prop-types';

const Button = (props) => {
  const handleButtonClick = () => {
    props.handleClick();
  };

  return (
    <button
      type="button"
      className={`btn btn-${props.color} btn-lg`}
      onClick={handleButtonClick}
    >
      {props.title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['warning', 'success', 'danger']).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Button;
