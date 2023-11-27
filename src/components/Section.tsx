import React, { FC, ReactNode } from 'react';

interface ISection {
  title?: string;
  children: ReactNode;
  icon?: any;
}

export const Section: FC<ISection> = ({title, children, icon}) => {
  return (
    <section className='flex flex-col w-full flex-wrap my-'>
      {title && (
        <div className='flex py-8 gap-4 flex-row items-center justify-center'>
          <h1 className='text-white text-2xl'>{icon}</h1>
          <h1 className='text-white text-2xl'>{title}</h1>
          <hr className='w-full border-tertiary-450'/>
        </div>
      )}
      <div className='flex flex-row sm:justify-evenly'>
        {children}
      </div>
    </section>
  );
};

