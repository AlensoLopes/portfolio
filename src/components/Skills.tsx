import * as React from 'react';

export const Skills = () => {
  return (
    <section className="flex flex-col w-full
       px-16 flex-wrap">
      <div className='flex justify-start'>
        <div className='flex-col
          w-60 h-44 max-w-md rounded-2xl bg-white p-2'>
          <h1 className='text-background-100 text-2xl'>
            Languages
          </h1>
          <div className='flex flex-col px-8 py-4 gap-16'>
            <ul className='text-background-100'>
              <li>Java</li>
              <li>TypeScript</li>
              <li>C</li>
              <li>PHP</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-end'>
        <div className='flex-col
          w-60 h-44 max-w-md rounded-2xl bg-white p-2
          flex justify-end'>
          <h1 className='text-background-100 text-2xl'>Framework</h1>
          <div className='flex flex-col px-8 py-4 gap-16'>
            <ul className='text-background-100'>
              <li>React</li>
              <li>Express</li>
              <li>Tailwindcss</li>
              <li>NodeJS</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex justify-start'>
        <div className='flex-col
          w-60 h-44 max-w-md rounded-2xl bg-white p-2
          flex'>
          <h1 className='text-background-100 text-2xl'>
            Tools
          </h1>
          <div className='flex justify-start py-4 px-8 gap-16'>
            <ul className='text-background-100'>
              <li>Git</li>
              <li>Postman</li>
              <li>Linux</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
