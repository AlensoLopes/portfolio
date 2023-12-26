import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='border-t-2 border-secondary-450 flex flex-col
      justify-center items-center bg-secondary-500 py-4 px-4'>
      <h1 className='text-white font-bold text-center text-2xl py-1'>
        Alenso.L</h1>
      <div>
        <p className='text-white opacity-80 font-medium'>
        &copy; { date === 2023 ? date : '2023 - ' + date }. All right reserved.
        </p>
      </div>
      <div className='text-white opacity-80 font-medium
        flex flex-row gap-2 items-center'>
        <a href='https://github.com/AlensoLopes' target='_blank'
          className='text-lg hover:text-gray-300 transition-all'>
          <FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a href='https://linkedin.com/in/alensolopes' target='_blank'
          className='text-lg hover:text-gray-300 transition-all'>
          <FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
      </div>
    </footer>
  );
};
