import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages';
import { NotFound } from '../pages';
import { Projects } from '../pages';
export const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/404' element={<NotFound/>} />
      <Route path='/Projects' element={<Projects/>} />
    </Routes>
  );
};
