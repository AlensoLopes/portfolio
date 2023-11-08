import { get } from 'http';
import * as React from 'react';
// import { API_LOGO_KEY }  from '../assets/conf/config.json';

const api_key = 'YmWmVjnrHAnGAj/kjd/qts3pEJZKfktVI8+ANI/yQfE=';
const API_URL = 'https://api.brandfetch.io/v2/brands/';

async function getLogo(companyName : string){
  const url = API_URL + companyName;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + api_key
    }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
  return response.logos[0].formats[0].src;
}

export const Skills = () => {
  const react = getLogo('Microsoft.com');
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
        </div>
      </div>
    </div>
  );
};
