import React, { FunctionComponent } from 'react';
import { Header, Footer, Presentation,
  Skills } from '../components';
import PropTypes from 'prop-types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout : FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <div>
      <Header name="Projects"/>
      <div className='flex h-screen bg-secondary-480'>
        <Presentation/>
      </div>
      <Skills/>
      {children}
      <Footer/>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
