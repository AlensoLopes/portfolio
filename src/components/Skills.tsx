import * as React from 'react';

export const Skills = () => {
  return (
    <section className='flex flex-col flex-wrap'>
      <div className='flex py-8 justify-center'>
        <h1 className='text-white text-2xl'>Skills</h1>
      </div>
      <div className='flex flex-col sm:flex-row sm:justify-evenly'>
        <div className='w-fit'>
          <h2 className='text-white text-xl'>
            Languages
          </h2>
          <div className=''>
            <ul className='py-4 text-white'>
              <li className=''>Java(FX)</li>
              <li className=''>TypeScript</li>
              <li className=''>C</li>
              <li className=''>PHP</li>
              <li className=''>SQL</li>
            </ul>
          </div>
        </div>
        <div className='w-fit'>
          <h2 className='text-white text-xl'>
            Frameworks
          </h2>
          <div className=''>
            <ul className='py-4 text-white'>
              <li className=''>React</li>
              <li className=''>Tailwindcss</li>
              <li className=''>Laravel</li>
              <li className=''>ExpressJS</li>
            </ul>
          </div>
        </div>
        <div className='w-28'>
          <h2 className='text-white text-xl'>
            Tools
          </h2>
          <div className=''>
            <ul className='py-4 text-white'>
              <li className=''>SceneBuilder</li>
              <li className=''>Postman</li>
              <li className=''>Git</li>
              <li className=''>API Rest</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
