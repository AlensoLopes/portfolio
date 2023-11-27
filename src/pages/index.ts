import { Home } from './Home';
import Layout from './Layout';
import NotFound from './NotFound';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

library.add(faLaptopCode, faGraduationCap, faBriefcase);

export {
  Home,
  Layout,
  NotFound
};
