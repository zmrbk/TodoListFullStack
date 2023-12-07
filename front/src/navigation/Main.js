import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './Pages/Main/DetailPage';
import HomePage from './Pages/Main/HomePage';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/detail/:id" element={<DetailPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
