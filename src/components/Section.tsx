import React, { FC, ReactNode } from 'react';

interface ISection {
  title?: string;
  children: ReactNode;
}

export const Section: FC<ISection> = ({title, children}) => {
  return (
    <section className='flex flex-col flex-wrap'>
      <div className='flex py-8 justify-center'>
        <h1 className='text-white text-2xl'>{title}</h1>
      </div>
      <div className='flex flex-row sm:justify-evenly'>
        {children}
      </div>
    </section>
  );
};

