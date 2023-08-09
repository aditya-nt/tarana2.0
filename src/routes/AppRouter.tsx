import { Route, Routes } from 'react-router-dom';
import Layout from '@/components/shared/Layout';
import PrivateRoute from '@/routes/PrivateRoute';
import DashboardPage from '@/pages/DashboardPage';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/Home';
import React from 'react';

function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/player"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;
