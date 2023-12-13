import React, { FC } from 'react';

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
      <div className='flex'>
        <h1></h1>
      </div>
    );
  };
