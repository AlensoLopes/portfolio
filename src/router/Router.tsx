import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Projects, SingleProject} from '../pages';

export const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='/' element={<Home />} />
      <Route path='/Projects' element={<Projects/>} />
      <Route path='/Projects/:p_id' element={<SingleProject/>}/>
    </Routes>
  );
};
