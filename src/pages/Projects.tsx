import React from 'react';
import { Layout } from '../pages';
import projects from '../assets/json/projects.json';
import { Project } from './Home';
import { Section } from '../components';
import logo from '../assets/pictures/logo-placeholder.jpg';

export const Projects = () => {
  return (
    <Layout header_name='Home' link='/'>
      <Section>
        <ul className='grid sm:grid-cols-2 grid-cols-1 gap-4 w-full py-8 px-4
        sm:w-10/12'>
          {projects.map((project: Project, index: number) => (
            <a href={`Projects/${ project.name.replaceAll(' ', '_') }`}
              className='rounded-xl transition-all duration-300
              hover:shadow-2xl'>
              <li key={ index } className='flex flex-col text-white
                w-full'>
                <div className='flex flex-col items-center text-white w-full'>
                  <img src={ logo } alt={ project.name }
                    className='rounded-md h-[92%] w-[92%]'/>
                  <h1 className='text-white text-xl'>{ project.name }</h1>
                </div>
                <div className='flex flex-row gap-4 px-6
                align-bottom'>
                  {project.languages.map((langage: { name: string,
                  image: string },
                  index: number) => (
                    <div key={index} className='flex flex-col
                    text-white justify-start'>
                      <img src={ langage.image } alt={ langage.name }
                        className='h-4 w-4 sm:w-fit'/>
                    </div>
                  ))}
                </div>
                <div className='flex flex-col items-center
                text-white w-full py-2'>
                  <p className='text-white text-md px-4'>
                    { project.description.length > 122 ?
                      project.description.substring(0, 122)
                        .slice(0, -1)
                        .substring(0,project.description.length - 1)
                        .concat('...')
                      : project.description }
                  </p>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </Section>
    </Layout>
  );
};
