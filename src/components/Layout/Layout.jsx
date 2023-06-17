import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthForm from 'components/AuthForm/AuthForm';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { Container, Header } from './Layout.styled';

const Layout = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

	
  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthForm />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout