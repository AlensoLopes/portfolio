import React from 'react';
import { Layout } from './Layout';
import { useParams } from 'react-router-dom';
import projects from '../assets/json/projects.json';
import { ProjectDesc } from '../components';

export const SingleProject = () => {
  const params = useParams();
  return (
    <Layout header_name='Projects' link='/Projects' home_link='/'>
      <ProjectDesc title={params.p_id} description='test'>
        <div></div>
      </ProjectDesc>
    </Layout>
  );
};
