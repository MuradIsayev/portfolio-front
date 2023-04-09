import NavBar from '../NavBar/NavBar';
import avatar from '../../assets/avatar.svg';
import bluegithub from '../../assets/bluegithub.svg';
import './Home.css';
import darkgithub from '../../assets/darkgithub.svg';
import bluelinkedin from '../../assets/bluelinkedin.svg';
import darklinkedin from '../../assets/darklinkedin.svg';

function Home() {
  return (
    <div className="main-container">
      <div className="navbar-container home-navbar-class-block">
        <NavBar />
      </div>
      <div
        className="content-container"
        style={{ backgroundColor: 'transparent' }}
      >
        <h2>Filankəs</h2>
        <p className="home-texts">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
          asperiores
        </p>
        <div className="center-content">
          <img className="avatar-img" src={avatar} alt="portfolio avatar" />
          <div className="socials-container">
            <div className="social-container">
              <a className="home-links" href="https://github.com/MuradIsayev">
                <img
                  className="social-img"
                  src={bluegithub}
                  alt="github logo"
                />
                <p className="social-text">My Github</p>
              </a>
            </div>
            <div className="social-container">
              <a
                className="home-links"
                href="https://www.linkedin.com/in/murad-isayev-7735671b5/"
              >
                <img
                  className="social-img"
                  src={bluelinkedin}
                  alt="linkedin logo"
                />
                <p className="social-text">My LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
        <p className="home-texts">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
          itaque asperiores vitae deleniti praesentium odio perferendis, fuga
          sapiente quidem sed delectus facere minima repudiandae?
        </p>
      </div>
    </div>
  );
}

export default Home;
