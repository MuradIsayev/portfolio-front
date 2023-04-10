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
        className="mt-32 w-[90%] md:w-[auto] md:mt-20">
        <h2 className='headers'>Filankəs</h2>
        <p className="home-texts">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
          asperiores
        </p>
        <div className="flex flex-row items-center justify-start gap-7 mx-auto my-6 md:flex-col md:items-start md:justify-start md:gap-4 md:mx-auto md:my-4">
          <img className="avatar-img" src={avatar} alt="portfolio avatar" />
          <div className="flex flex-col gap-3 justify-center md:items-start md:gap-2">
            <div className="social-container">
              <a className="home-links" href="https://github.com/MuradIsayev">
                <img
                  className="h-[26px] md:h-[21px]"
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
                  className="h-[26px] md:h-[21px]"
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
