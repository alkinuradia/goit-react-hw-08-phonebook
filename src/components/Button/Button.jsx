import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled'; 

const Button = ({title, type='button', onClick }) => { return (
  <ButtonStyled className="btn" type={type} onClick={onClick}>
    {title}
  </ButtonStyled>
);}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;