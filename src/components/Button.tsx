import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  link : string | undefined;
  target ?: boolean;
}

export const Button : FC<ButtonProps> = ({ children, link }) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center py-8'>
      <button onClick={ () => navigate(link ? link : '/')}
        className='bg-tertiary-450 hover:border-secondary-450 text-white
        px-4 rounded-md border border-white transition-all flex
        flex-row gap-2 items-center text-xl'>
        { children }
      </button>
    </div>
  );
};
