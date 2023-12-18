import React, { FC } from 'react';

interface BackArrowProps {
  path ?: string
  text ?: string
}

export const BackArrow : FC<BackArrowProps> = ({ path, text }) => {
  return (
    <a href={path}>
      <div className='flex text-white border rounded-md text-xl items-center
      hover:border-secondary-450 transition-all px-2'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>

        <h1 className='px-2'>{text}</h1>
      </div>
    </a>
  );
};
