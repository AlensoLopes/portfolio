import React from 'react';
import { Layout } from './';
import { Presentation, Section } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skills from '../assets/json/skills.json';
import education from '../assets/json/education.json';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

interface Skill {
  title: string;
  value: string[];
}

interface Education {
  title: string;
  resume: string;
  location: string;
  date: string;
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
          icon={<FontAwesomeIcon icon='laptop-code'/>}
        >
          {skills.map((skill: Skill, index: number) => (
            <div key={index} className='flex flex-col text-white'>
              <h1 className='py-2 text-xl'>{skill.title}</h1>
              <ul className='flex flex-col'>
                {skill.value.map((value: string, index: number) => (
                  <li key={index} className='text-white text-md px-2'>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>
        <Section title='Education'
          icon={<FontAwesomeIcon icon='graduation-cap' />}
        >
          <div className='flex flex-col items-center text-white w-full'>
            <ul className='text-white w-full'>
              {education.map((education: Education, index: number) => (
                <div key={index} className='flex flex-col items-center text-white
                w-full'>
                  <Disclosure>
                    <Disclosure.Button className={'w-full'}>
                      <div className='flex flex-row border rounded-md
                      justify-between gap-4 px-2 items-center'>
                        <h1 className=''>{education.date}</h1>
                        <h1 className=''>{education.title}</h1>
                        <ChevronUpIcon
                          className={'h-5 w-5 text-purple-500'}
                        />
                      </div>
                    </Disclosure.Button>
                    <Disclosure.Panel>
                      <p className='text-white'>
                        <FontAwesomeIcon icon='location-dot'
                          className='text-red-600'/>
                        {education.location} {education.resume}</p>
                    </Disclosure.Panel>
                  </Disclosure>
                </div>
              ))}
            </ul>
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
