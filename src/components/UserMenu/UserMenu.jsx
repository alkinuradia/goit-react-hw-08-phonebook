import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations'; 
import { getUserName } from 'redux/auth/authSelector';
import { StyledUserMenu, LogoutBtn } from './UserMenu.styled'; 

const UserMenu = () => {
  const dispatch = useDispatch();
    const userName = useSelector(getUserName);

  return (
    <StyledUserMenu>
      <p>Hello, {userName}</p>
      <LogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </LogoutBtn>
    </StyledUserMenu>
  );
};
export default UserMenu;