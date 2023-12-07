import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './Pages/Auth/AuthPage';
import RegPage from './Pages/Auth/RegPage';

export default function Auth() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/reg" element={<RegPage />} />
      <Route path="*" element={<AuthPage />} />
    </Routes>
  );
}
