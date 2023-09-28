import React from 'react';

const Picture = 'https://avatars.githubusercontent.com/u/46823570?v=4';

export const Header = () => {
  return (
    <header className='px-6 py-4 flex flex-row
      justify-between items-center sticky top-0 bg-background-100'>
      <h1 className='text-2xl text-white'>Alenso.L</h1>
      <div className='flex flex-row items-center'>
        <img src={Picture} alt='' className='w-10 h-10 rounded-full'/>
      </div>
    </header>
  );
};
