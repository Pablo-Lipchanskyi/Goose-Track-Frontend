// import CalendarPage from 'pages/CalendarPage/CalendarPage';
// import { lazy } from 'react';
// import { Route, Routes } from 'react-router-dom';

import LoginPage from 'pages/LoginPage/LoginPage';
// import RegisterPage from 'pages/RegisterPage/RegisterPage';

// const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export const App = () => {
  return (
    <>
      {/* <RegisterPage /> */}
      <LoginPage />
    </>
  );
};
