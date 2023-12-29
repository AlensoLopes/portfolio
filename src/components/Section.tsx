import React, { FC, ReactNode } from 'react';
interface ISection {
  title?: string;
  children: ReactNode;
  icon?: ReactNode;
}

export const Section: FC<ISection> = ({ title, children, icon }) => {
  return (
    <section className='flex flex-col w-full flex-wrap'>
      {title && (
        <div className='flex py-8 gap-4 flex-row items-center justify-center
        w-full'>
          <span className='text-white text-2xl'>{icon}</span>
          <h1 className='text-white text-2xl font-extrabold'>{title}</h1>
          <hr className='border-tertiary-450 w-full'/>
        </div>
      )}
      <div className='flex flex-row sm:justify-evenly flex-wrap gap-8 sm:gap-4
      justify'>
        { children }
      </div>
    </section>
  );
};

