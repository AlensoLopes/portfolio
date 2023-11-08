import * as React from 'react';
import { API_LOGO_KEY }  from '../assets/conf/config.json';
const API_URL = 'https://api.api-ninjas.com/v1/logo?name=';

async function getLogo(companyName : string){
  const url = API_URL + companyName;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Api-Key': '1d4f3e0b-7a0e-4a6e-8a3e-4e5b2d8a2a5a'
    }
  });
}

export const Skills = () => {
  return (
    <div className='flex justify-center bg-secondary-480 flex-col border-t
    border-secondary-450 py-2 items-center'>
      <div className='flex justify-center py-6'>
        <h1 className='text-4xl text-white'>Skills</h1>
      </div>
      <div className='flex justify-center w-full flex-col items-center gap-2'>
        <h1 className='text-4xl text-white gap-4'>FrontEnd</h1>
        <h2 className='text-2xl text-white'>Technologies</h2>
        <div className='flex flex-wrap'>
          test
        </div>
      </div>
    </div>
  );
};
