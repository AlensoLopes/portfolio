import { Home } from './Home';
import Layout from './Layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faGraduationCap,
  faBriefcase, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { Projects } from './Projects';
library.add(faLaptopCode, faGraduationCap, faBriefcase, faMapMarkerAlt);

export {
  Home,
  Layout,
  Projects
};
