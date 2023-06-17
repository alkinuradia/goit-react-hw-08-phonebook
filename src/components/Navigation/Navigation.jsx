import { useSelector } from 'react-redux';
import { StyledNavigation, Link } from './Navigation.styled'; 
import { getIsLoggedIn } from 'redux/auth/authSelector';

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <StyledNavigation>
      <Link to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts">
          Phonebook
        </Link>
      )}
    </StyledNavigation>
  );
};
export default Navigation;