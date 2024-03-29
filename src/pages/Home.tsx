import React from 'react';
import { Layout } from './';
import { Presentation, Section } from '../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skills from '../assets/json/skills.json';
import education from '../assets/json/education.json';
import projects from '../assets/json/projects.json';
import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import logo from '../assets/pictures/logo-placeholder.jpg';
import { Button } from '../components';
import { useNavigate } from 'react-router-dom';

interface Skill {
  title: string;
  value: string[];
}

interface Education {
  title: string;
  degree: string;
  location: string;
  date: string;
  resume: string;
}

export interface Project {
  name: string;
  description: string;
  image?: string;
  languages: {name: string, image: string}[];
}

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Layout header_name='Projects' link='/Projects'>
      <div className='flex h-[75vh]'>
        <Presentation />
      </div>
      <div className='flex flex-col lg:px-36 px-5'>
        <Section
          title='Skills'
          icon={<FontAwesomeIcon icon='laptop-code'/>}
        >
          {skills.map((skill: Skill, index: number) => (
            <div key={ index } className='flex flex-col text-white'>
              <h1 className='py-2 text-xl font-semibold'>{ skill.title }</h1>
              <ul className='flex flex-col'>
                {skill.value.map((value: string, index: number) => (
                  <li key={ index } className='text-white text-md '>
                    { value }
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
                <div key={ index } className='flex flex-col items-center text-white
                w-full py-2'>
                  <Disclosure defaultOpen={ index === 0 }>
                    <Disclosure.Button className={'w-full h-8'}
                      data-headlessui-state="open">
                      <div className='flex flex-row border rounded-md
                      justify-between gap-4 sm:px-2 px-1 items-center h-10 text-sm
                      sm:text-base sm:h-8 '>
                        <h1 className=''>{ education.title }</h1>
                        <div className='flex flex-row items-center gap-2'>
                          <h1>{ education.date }</h1>
                          <ChevronUpIcon
                            className="ui-open:rotate-180 ui-open:transform h-5
                          transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-200 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="transition duration-200 ease-out"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Disclosure.Panel className={'w-full sm:py-0 py-4'}>
                        <div className='flex flex-col items-center py-2'>
                          <p className='text-white'>
                            <i><FontAwesomeIcon
                              icon='location-dot'
                              className='text-red-600'/>
                            </i> &nbsp;
                            { education.location } - &nbsp;
                            <FontAwesomeIcon icon='graduation-cap' /> &nbsp;
                            { education.degree }
                          </p>
                          <p className='text-white py-2'>
                            { education.resume }
                          </p>
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </Disclosure>
                </div>
              ))}
            </ul>
          </div>
        </Section>
        <Section title='Projects'
          icon={<FontAwesomeIcon icon='briefcase'/>}
        >
          <ul className='grid sm:grid-cols-2 grid-cols-1 gap-4 w-full'>
            {projects.map((project: Project, index: number) => (
              index < 4 && (
                <button key={ index }
                  onClick={() => navigate('/Projects/' +
                    project.name.replaceAll(' ', '_'))}
                  className='rounded-xl transition-all duration-300
                  hover:shadow-2xl border-2 border-secondary-450 py-2
                  hover:-translate-y-0.5 bg-secondary-500'>
                  <li key={ index } className='flex flex-col text-white
                  w-full'>
                    <div className='flex flex-col items-center text-white w-full
                      h-[25rem]'>
                      <img src={ project?.image ? project?.image : logo }
                        alt={ project.name }
                        className='rounded-md h-[92%] w-[92%] object-cover'/>
                      <h1 className='text-white text-xl'>{ project.name }</h1>
                    </div>
                    <div className='flex flex-row gap-4 px-6
                    align-bottom'>
                      {project.languages.map((langage: { name: string,
                      image: string }) => (
                        <img src={ langage.image } alt={ langage.name }
                          className='h-4 w-4 sm:w-fit'/>
                      ))}
                    </div>
                    <div className='flex flex-col
                    text-white w-full py-2 px-2'>
                      <p className='text-white text-md px-4 text-justify'>
                        { project.description.length > 120 ?
                          project.description.substring(0, 120)
                            .slice(0, -1)
                            .concat('...')
                          : project.description }
                      </p>
                    </div>
                  </li>
                </button>
              )))}
          </ul>
        </Section>
      </div>
      <Button link='/Projects'>View More</Button>
    </Layout>
  );
};
