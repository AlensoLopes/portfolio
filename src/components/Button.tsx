import React, {FC} from 'react';

interface ButtonProps {
  children: React.ReactNode;
  link : string | undefined;
  target ?: boolean;
}

export const Button : FC<ButtonProps> = ({ children, link, target = false }) => {
  return (
    <div className='flex flex-col items-center justify-center py-8'>
      <a href={ link }
        className='bg-tertiary-450 hover:border-secondary-450 text-white
        px-4 rounded-md border border-white transition-all' target=
          { target ? '_blank' : '_parent' } >
        { children }
      </a>
    </div>
  );
};
