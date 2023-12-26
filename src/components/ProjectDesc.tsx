import React, { FC } from 'react';
import { Button } from '../components';

interface IProjectDesc {
  description : string | undefined;
  features : string[] | undefined;
  pictures ?: string[] | undefined;
  github_link ?: string | undefined;
}

export const ProjectDesc : FC<IProjectDesc> =
  ({ description, features, pictures, github_link }) => {
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
          <p className='text-xl'>
            Here are some of the features of this project:
          </p>
          <p className='text-white py-2'>
            { features?.map((feature: string, index: number) => (
              <li key={index} className='text-white text-md px-4'>
                { feature }
              </li>
            ))}
          </p>
        </div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full py-4
        justify-center px-4'>
          {pictures && (pictures.map((picture: string, index: number) => (
            <div key={index} className='rounded-md transition-all duration-300
            hover:shadow-2xl justify-center flex'>
              <img src={ picture } alt={ picture }
                className='rounded-md h-[92%] w-[92%]'/>
            </div>
          )))}
        </div>
        <div className='flex flex-col py-4 px-2'>
          { github_link !== '' ? (
            <Button link={ github_link }
              target={ true }>
                View on Github
            </Button>
          ) : null}
        </div>
      </section>
    );
  };
