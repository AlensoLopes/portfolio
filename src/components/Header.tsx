import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
const Picture = 'https://avatars.githubusercontent.com/u/46823570?v=4';

interface HeaderProps {
  name: string;
  link: string;
  home_link ?: string
}

export const Header: FC<HeaderProps> = ({ name, link, home_link }) => {
  const navigate = useNavigate();
  return (
    <header className='px-5 lg:px-52 py-4 flex flex-row justify-between
    items-center sticky z-10 top-0 bg-secondary-500 backdrop-blur-sm'>
      <button onClick={() => navigate(home_link ? home_link : '/')}>
        <div className='flex flex-row items-center lg:px-10 gap-4 px-4'>
          <img src={Picture} alt='' className='w-10 h-10 rounded-full' />
          <h1 className='text-2xl text-white'>A.L</h1>
        </div>
      </button>
      <div className='flex flex-row items-center justify-center'>
        <h1 className='text-white text-xl'>
          {home_link && <button onClick={() => navigate(home_link)}
            className='hover:underline px-4'>
              Home
          </button>}
          <button onClick={() => navigate(link ? link : '/')}
            className='hover:underline'>
            { name }
          </button>
        </h1>
      </div>
    </header>
  );
};
