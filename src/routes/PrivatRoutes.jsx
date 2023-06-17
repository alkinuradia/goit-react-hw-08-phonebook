import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getIsLoggedIn, getisRefreshing } from "redux/auth/authSelector";

const PrivateRoute = ({component, redirectTo = '/'}) => {
    const isLoggenIn = useSelector(getIsLoggedIn);
    const isRefreshing = useSelector(getisRefreshing);
    const shouldRedirect = !isLoggenIn && !isRefreshing;
    console.log(shouldRedirect)
    return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;