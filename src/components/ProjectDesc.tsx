import React, { FC } from 'react';
import { Button } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IProjectDesc {
  description ?: string | undefined ;
  features ?: string[] | undefined;
  pictures ?: string[] | undefined;
  github_link ?: string | undefined;
}

export const ProjectDesc : FC<IProjectDesc> =
  ({ description, features, pictures, github_link }) => {
    return (
      <section className='py-4 flex flex-col'>
        <hr/>
        <div className='text-white py-2 px-4'>
          <h1 className='text-white text-2xl font-extrabold
            flex flex-row items-center gap-2'>
            <span className='text-white text-lg'>
              <FontAwesomeIcon icon='circle-info'/></span>
            Description
          </h1>
          { description !== undefined ? (
            <p className='text-white py-2 px-2'>
              { description }
            </p>
          ) : (
            <p className='text-gray-100 px-2'>Coming soon...</p>
          )}
        </div>
        <div className='text-white py-2 px-4'>
          <h1 className='text-white text-2xl font-extrabold gap-2 flex flex-row
            items-center'>
            <span className='text-white text-lg'>
              <FontAwesomeIcon icon='list'/></span>
            Features
          </h1>
          { features !== undefined ? (
            features.map((feature: string, index: number) => (
              <li key={ index } className='text-white py-2 px-2'>
                { feature }
              </li>
            )
            )
          ) : <p className='text-gray-100 px-2'>Coming soon...</p>}
        </div>
        <hr/>
        <div className='text-white py-2 px-4'>
          <h1 className='text-white text-2xl font-extrabold gap-2 flex flex-row
            items-center'>
            <span className='text-white text-lg'>
              <FontAwesomeIcon icon='image'/></span>
            Pictures
          </h1>
          { pictures !== undefined ? (
            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full py-4
            justify-center'>
              {pictures && (pictures.map((picture: string, index: number) => (
                <div key={index} className='rounded-md transition-all duration-300
                    hover:shadow-2xl justify-center flex'>
                  <img src={ picture } alt={ picture }
                    className='rounded-md h-[92%] w-[92%]'/>
                </div>
              )))}
            </div>
          ) : (
            <p className='text-gray-100 px-2'>Coming soon...</p>
          )}
        </div>
        <div className='flex flex-col py-4 px-2'>
          { github_link !== '' ? (
            <Button link={ github_link }
              target={ true }>
                View on Github
              <span className='text-white text-lg'>
                <FontAwesomeIcon icon={['fab', 'github']} /></span>
            </Button>
          ) : null}
        </div>
      </section>
    );
  };
