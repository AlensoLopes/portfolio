import React, { FC } from 'react';
import { BackArrow } from '../components';

interface ProjectDescProps {
  title : string | undefined,
  description : string,
  img ?: string[],
  link ?: string,
  github_link ?: string,
  children : React.ReactNode
}

export const ProjectDesc : FC<ProjectDescProps> =
  ({ title, description, img, link, github_link, children}) => {
    return (
      <ul className='grid grid-cols-2 w-full gap-4'>
        <li className='flex w-full col-span-2'>
          <BackArrow path='/Projects' text='Projects'/>
        </li>
      </ul>
    );
  };
