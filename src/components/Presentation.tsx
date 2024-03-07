import React from 'react';

export const Presentation = () => {
  return (
    <div className='flex flex-col-reverse items-center px-4 lg:flex-row
    lg:justify-between justify-center'>
      <div className='flex flex-col items-center px-4 gap-2 lg:px-32'>
        <h1 className='text-white
          text-2xl'>Hi, I am Alenso Lopes.</h1>
        <div className='flex text-white py-4 flex-col items-center
          text-md'>
          <p>I'm a student in Software & Web Developpement.</p>
          <p>Studing in University Caen Normandie in a University Bachelor.</p>
        </div>
      </div>
      <div className='flex flex-col px-4 lg:px-32 py-8'>
        <img src='https://avatars.githubusercontent.com/u/46823570?v=4'
          alt='' className='rounded-full sm:w-40 sm:h-40 w-20 h-20 '/>
      </div>
    </div>
  );
};
