import React, { FC } from 'react';

interface IProjectDesc {
  description : string | undefined;
  features : string;
}

export const ProjectDesc : FC<IProjectDesc> =
  ({ description, features }) => {
    return (
      <section className='py-4 flex flex-col'>
        <hr/>
        <div className='text-white py-2 px-4'>
          <h1 className='text-white text-2xl font-extrabold'>
            Description
          </h1>
          <p className='text-white py-2'>
            { description }
          </p>
        </div>
        <div className='text-white py-2 px-4'>
          <h1 className='text-white text-2xl font-extrabold'>
            Features
          </h1>
          <p className='text-white py-2'>
            { features }
          </p>
        </div>
      </section>
    );
  };
