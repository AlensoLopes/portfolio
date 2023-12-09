import React, {FC} from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button : FC<ButtonProps> = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-center py-8'>
      <a href='/Projects'
        className='bg-tertiary-450 hover:border-secondary-450 text-white
        px-4 rounded-md border border-white transition-all'>
        { children }
      </a>
    </div>
  );
};
