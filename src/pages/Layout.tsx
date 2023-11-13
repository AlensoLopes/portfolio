import React, { FunctionComponent } from 'react';
import { Header, Footer, Presentation,
  Skills } from '../components';
import PropTypes from 'prop-types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout : FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <div className='bg-secondary-480'>
      <Header name="Projects"/>
      <div className='flex h-[75vh]'>
        <Presentation/>
      </div>
      <div className='flex flex-col lg:px-36 px-5'>
        <Skills/>
      </div>
      {children}
      <Footer/>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
