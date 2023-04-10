import NavBar from '../NavBar/NavBar';
import avatar from '../../assets/avatar.svg';
import bluegithub from '../../assets/bluegithub.svg';
import darkgithub from '../../assets/darkgithub.svg';
import bluelinkedin from '../../assets/bluelinkedin.svg';
import darklinkedin from '../../assets/darklinkedin.svg';
import { motion } from 'framer-motion';

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
          <img className="avatar-img"
            src={avatar} alt="portfolio avatar" />
          <div className="flex flex-col gap-3 justify-center md:items-start md:gap-2">
            <a className="home-links" href="https://github.com/MuradIsayev">
              <motion.img
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="h-[27px] md:h-[21px]"
                src={bluegithub}
                alt="github logo"
              />
              <motion.p className="md:text-[.65rem] transition duration-100 ease-linear dark:hover:text-[#f2f2f2] hover:text-[#000000]" initial={{ scale: 0 }}
                animate={{ scale: 1, }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15
                }}>My Github</motion.p>
            </a>
            <a
              className="home-links"
              href="https://www.linkedin.com/in/murad-isayev-7735671b5/"
            >
              <motion.img
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                className="h-[27px] md:h-[21px]"
                src={bluelinkedin}
                alt="linkedin logo"
              />
              <motion.p className="md:text-[.65rem] transition duration-100 ease-linear dark:hover:text-[#f2f2f2] hover:text-[#000000]" initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15
                }}>My LinkedIn</motion.p>
            </a>
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
