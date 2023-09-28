import React, { FunctionComponent } from 'react';
import { Header } from '../components';
import PropTypes from 'prop-types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout : FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <div>
      <Header />
      <div className='flex'>
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
