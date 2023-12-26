import { Header } from './Header';
import { Footer } from './Footer';
import { Presentation } from './Presentation';
import { Section } from './Section';
import { Button } from './Button';
import { BackArrow } from './BackArrow';
import { ProjectDesc } from './ProjectDesc';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleInfo, faList, faImage} from '@fortawesome/free-solid-svg-icons';
import { faGithub,
  faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faCircleInfo, faList, faImage, faGithub, faLinkedin);

export{
  Header,
  Footer,
  Presentation,
  Section,
  Button,
  BackArrow,
  ProjectDesc
};
