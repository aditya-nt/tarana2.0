import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '@/components/shared/Layout';
import PrivateRoute from '@/routes/PrivateRoute';
import DashboardPage from '@/pages/DashboardPage';
import LoginPage from '@/pages/LoginPage';
import HomePage from '@/pages/HomePage';
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

function AppRouter() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={!!user ? <Navigate to="/" /> : <LoginPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
