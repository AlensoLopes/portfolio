import React, { useEffect } from 'react';
import { Layout } from './Layout';
import { useParams } from 'react-router-dom';
import projects from '../assets/json/projects.json';
import { BackArrow } from '../components';
import logo from '../assets/pictures/logo-placeholder.jpg';
import { getCollaborators, Collaborators } from '../utils';

export const SingleProject = () => {
  const params = useParams();
  const desc = projects.find((project) => project.name ===
    params.p_id?.replaceAll('_', ' '));
  const [collaborators, setCollaborators] =
    React.useState<Collaborators[] | null>(null);

  useEffect(() => {
    const fetchCollaborators = async () => {
      try {
        const collaboratorsData = await getCollaborators('alensolopes',
          params.p_id?.replaceAll('_', ' '));
        setCollaborators(collaboratorsData);
      } catch (error) {
        console.error('Error fetching collaborators:', error);
      }
    };
    fetchCollaborators();
  }, []);

  return (
    <Layout header_name='Projects' link='/Projects' home_link='/'>
      <div className='w-full'>
        <div className='flex flex-col items-start text-white w-full
        justify-start py-8'>
          <BackArrow path='/Projects' text='Projects'/>
        </div>
        <div className='flex flex-col items-center justify-center
        text-white w-full'>
          <img src={ desc?.image ? desc.image : logo } alt={ params.p_id }
            className='rounded-md h-fit w-full'/>
        </div>
        <div className='flex flex-col justify-start py-4'>
          <div className='flex flex-row items-center'>
            <h1 className='text-white text-2xl font-bold'>{ params.p_id }</h1>
            {
              (collaborators ? collaborators.map((collaborator: Collaborators,
                index: number) => (
                (collaborator.login === 'princecorg' ? null :
                  <div key={index} className='flex flex-col text-white px-2'>
                    <a href={collaborator.html_url} target='_blank'>
                      <img
                        src={collaborator.avatar_url}
                        alt={collaborator.login}
                        className='h-6 w-6 sm:w-fit rounded-xl'
                      />
                    </a>
                  </div>
                )
              )) : (null)
              )}
          </div>
          <div className='flex flex-row gap-2 py-2'>
            { desc?.languages.map((langage: { name?: string, image?: string },
              index: number) => (
              <div key={index} className='flex flex-col text-white'>
                <img src={ langage.image } alt={ langage.name }
                  className='h-6 w-6 sm:w-fit'/>
              </div>
            ))}
          </div>
          <div className='py-4'>
            <hr/>
          </div>
        </div>
      </div>
    </Layout>
  );
};
