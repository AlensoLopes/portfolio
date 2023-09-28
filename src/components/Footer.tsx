import React from 'react';

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='border-t-2 border-secondary-450 flex flex-col
      justify-center items-center bg-secondary-500 py-4 px-4'>
      <h1 className='text-white font-bold text-center text-2xl py-1'>Alenso.L</h1>
      <div>
        <p className='text-white opacity-80 font-medium'>
          &copy; Alenso {date}. All right reserved.
        </p>
      </div>
    </footer>
  );
};
