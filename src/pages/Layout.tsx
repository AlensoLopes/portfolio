import React, { FunctionComponent } from 'react';
import { Header, Footer } from '../components';
import PropTypes from 'prop-types';

interface LayoutProps {
  children: React.ReactNode;
}
const Layout : FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <div className='bg-secondary-480'>
      <Header name="Projects"/>
      <div className='flex flex-col justify-center items-center h-full
      max-w-[1440px]'>
        {children}
      </div>
      <Footer/>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
