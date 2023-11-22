import React from 'react';
import { Layout }  from './';
import { Presentation, Section } from '../components';
import skills from '../assets/json/skills.json';

interface Skill {
  title: string;
  value: string[];
}

export const Home = () => {
  return (
    <Layout>
      <div className='flex h-[70vh]'>
        <Presentation/>
      </div>
      <div className='flex flex-col lg:px-36 px-5'>
        <Section title='Skills'>
          {skills.map((skill: Skill, index: number) => (
            <div key={index} className='flex flex-col items-center'>
              <h1>{skill.title}</h1>
            </div>
          ))}
        </Section>
      </div>
    </Layout>
  );
};
