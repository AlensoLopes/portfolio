import React from 'react';
import { Layout } from './';
import { Presentation, Section } from '../components';
import skills from '../assets/json/skills.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Skill {
  title: string;
  value: string[];
}

export const Home = () => {
  return (
    <Layout>
      <div className='flex h-[75vh]'>
        <Presentation />
      </div>
      <div className='flex flex-col lg:px-36 px-5'>
        <Section
          title='Skills'
          icon={<FontAwesomeIcon icon='laptop-code' />}
        >
          {skills.map((skill: Skill, index: number) => (
            <div key={index} className='flex flex-col items-center text-white'>
              <h1 className='w-40'>{skill.title}</h1>
              <div className='flex flex-col'>
                <ul className='flex flex-col'>
                  {skill.value.map((value: string, index: number) => (
                    <li key={index} className='text-white'>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Section>
        <Section title='Education'
          icon={<FontAwesomeIcon icon='graduation-cap' />}
        >
          <div className='flex flex-col items-center text-white'>
            <h1 className='w-40'>University Caen Normandie</h1>
            <div className='flex flex-col'>
              <ul className='flex flex-col'>
                <li className='text-white'>University Bachelor</li>
                <li className='text-white'>Software & Web Developpement</li>
              </ul>
            </div>
          </div>
        </Section>
        <Section title='Projects'
          icon={<FontAwesomeIcon icon='briefcase' />}
        >
          <div className='flex flex-col items-center text-white'>
            <h1 className='w-40'>Portfolio</h1>
            <div className='flex flex-col'>
              <ul className='flex flex-col'>
                <li className='text-white'>This portfolio</li>
                <li className='text-white'>ReactJS</li>
                <li className='text-white'>TailwindCSS</li>
                <li className='text-white'>Material Tailwind</li>
              </ul>
            </div>
          </div>
        </Section>
      </div>
    </Layout>
  );
};
