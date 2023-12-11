import React from 'react';
import { Layout } from './Layout';
import { useParams } from 'react-router-dom';

export const SingleProject = () => {
  const params = useParams();
  return (
    <Layout header_name='Projects' link='/Projects'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-white text-2xl font-extrabold'>
          {params.id?.replaceAll('_', ' ')}</h1>
      </div>
    </Layout>
  );
};
