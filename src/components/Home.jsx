import NavBar from './NavBar';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import avatar from '../assets/avatar.svg';
import bluegithub from '../assets/bluegithub.svg';
import './Home.css';
import './navbar-cont.css';
import darkgithub from '../assets/darkgithub.svg';
import bluelinkedin from '../assets/bluelinkedin.svg'; 
import darklinkedin from '../assets/darklinkedin.svg';

function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="navbar-container">
      <NavBar />
      <div
        className="content-container"
        id={theme}
        style={{ backgroundColor: 'transparent' }}
      >
        <h2>Filankəs</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
          asperiores
        </p>
        <div className="center-content">
          <img
            src={avatar}
            style={{ height: '100px' }}
            alt="portfolio avatar"
          />
          <div className="socials-container">
            <div className="social-container">
              <img
                src={theme === 'dark' ? bluegithub : darkgithub}
                style={{ height: '24px' }}
                alt="github logo"
              />
              <p>My Github</p>
            </div>
            <div className="social-container">
              <img
                src={theme === 'dark' ? bluelinkedin : darklinkedin}
                style={{ height: '24px' }}
                alt="linkedin logo"
              />
              <p>My LinkedIn</p>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
          itaque asperiores vitae deleniti praesentium odio perferendis, fuga
          sapiente quidem sed delectus facere minima repudiandae?
        </p>
      </div>
    </div>
  );
}

export default Home;
