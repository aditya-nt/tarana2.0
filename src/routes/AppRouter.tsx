import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '@/components/shared/Layout';
import PrivateRoute from '@/routes/PrivateRoute';
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import PlaylistPage from '@/pages/PlaylistPage';
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
        <Route path="/playlist" element={<PrivateRoute><PlaylistPage /></PrivateRoute>} />
        <Route path="/home" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
