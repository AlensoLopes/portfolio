import React from 'react';
import { Layout } from '../pages';

export const Projects = () => {
  return (
    <Layout header_name='Home' link='/'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-white text-2xl'>Projects</h1>
      </div>
    </Layout>
  );
};
