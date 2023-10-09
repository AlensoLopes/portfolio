import React, { FunctionComponent } from 'react';
import { Header, Footer, Presentation } from '../components';
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
