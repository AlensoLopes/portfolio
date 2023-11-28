import { Home } from './Home';
import Layout from './Layout';
import NotFound from './NotFound';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faGraduationCap,
  faBriefcase, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

library.add(faLaptopCode, faGraduationCap, faBriefcase, faMapMarkerAlt);

export {
  Home,
  Layout,
  NotFound
};
