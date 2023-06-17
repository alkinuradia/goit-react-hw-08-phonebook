import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurretUser } from 'redux/auth/authOperations'; 
import { ToastContainer } from 'react-toastify';
import Layout from './Layout/Layout'; 
import PrivateRoute from 'routes/PrivatRoutes';
import PublicRoute from 'routes/PublicRoutes';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const PageContacts = lazy(() => import('../pages/PageContacts/PageContacts'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/PageRegistration/PageRegistration'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurretUser());
  }, [dispatch])

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<PageContacts />} />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              redirectTo="/contacts"
              restricted
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute
              redirectTo="/contacts"
              restricted
              component={<RegistrationPage />}
            />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
      <ToastContainer position="top-right"
      autoClose={2000}
theme="colored" />
      </>
  );
};

