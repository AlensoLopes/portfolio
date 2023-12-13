import React, { FC } from 'react';
import { Header, Footer } from '../components';
import PropTypes from 'prop-types';

interface LayoutProps {
  children: React.ReactNode;
  header_name: string;
  link : string;
  home_link ?: string;
}
export const Layout : FC<LayoutProps> =
({ children, header_name, link, home_link }) => {
  return (
    <div className='bg-secondary-480'>
      <Header name={ header_name } link={ link } home_link={ home_link } />
      <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center h-full
        max-w-[1440px]'>
          { children }
        </div>
      </div>
      <Footer/>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};
