import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/authSelector';

const PublicRoute = ({ component, redirectTo = '/', restricted = 'false' }) => {
  const isLoggenIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggenIn && restricted;
  console.log(shouldRedirect)
  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

export default PublicRoute;