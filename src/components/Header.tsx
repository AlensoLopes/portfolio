import React from 'react';

const Picture = 'https://avatars.githubusercontent.com/u/46823570?v=4';

export const Header = ({ name } : { name : string }) => {
  return (
    <header className='px-5 lg:px-36 py-4 flex flex-row
      justify-between items-center sticky top-0 bg-secondary-500 backdrop-blur-sm
      '>
      <div className='flex flex-row items-center lg:px-10 gap-4 px-4'>
        <img src={
          Picture
        } alt='' className='w-10 h-10 rounded-full'/>
        <h1 className='text-2xl text-white'>AL.</h1>
      </div>
      <div className='flex flex-row items-center'>
        <h1 className='text-white text-xl'>
          <a href='' className='animate-spin hover:underline'>
            {name}
          </a>
        </h1>
      </div>
    </header>
  );
};
