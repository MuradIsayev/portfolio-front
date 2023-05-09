import NavBar from '../NavBar/NavBar';
import avatar from '../../assets/avatar.svg';
import bluegithub from '../../assets/bluegithub.svg';
import darkgithub from '../../assets/darkgithub.svg';
import bluelinkedin from '../../assets/bluelinkedin.svg';
import darklinkedin from '../../assets/darklinkedin.svg';
import { motion } from 'framer-motion';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
        delayChildren: .2,
      },
    },
  }

  const items = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1, transition: {
        type: "tween",
        staggerChildren: 0.45,
        delayChildren: .4,
        duration: ".8",
      },
    },
  }

  return (
    <div className="main-container ">
      <div className="navbar-container">
        <NavBar />
      </div>
      <motion.div variants={container}
        initial="hidden"
        animate="show"
        className="mt-[7.3rem] w-[90%] md:w-[auto] md:mt-20">
        <motion.h2 variants={items}
          className='headers'>Murad Isayev</motion.h2>
        <motion.p variants={items}
          className="home-texts">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
          asperiores
        </motion.p>
        <div className="flex flex-row items-center justify-start gap-7 mx-auto my-6
         md:flex-col md:items-start md:justify-start md:gap-4 md:mx-auto md:my-4 md:mb-3">
          <motion.div variants={items}><img className="avatar-img"
            src={avatar} alt="portfolio avatar" />
          </motion.div>
          <motion.div variants={items} className="flex flex-col gap-3 justify-center md:items-start md:gap-[10px]">
            <a className="home-links" href="https://github.com/MuradIsayev">
              <img
                className="h-[27px] md:h-[21px]"
                src={bluegithub}
                alt="github logo"
              />
              <p className="md:text-[.65rem]">My Github</p>
            </a>
            <a
              className="home-links"
              href="https://www.linkedin.com/in/murad-isayev-7735671b5/"
            >
              <img
                className="h-[27px] md:h-[21px]"
                src={bluelinkedin}
                alt="linkedin logo"
              />
              <p className="md:text-[.65rem]">My LinkedIn</p>
            </a>
          </motion.div>
        </div>
        <motion.p variants={items} className="home-texts">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
          itaque asperiores vitae deleniti praesentium odio perferendis, fuga
          sapiente quidem sed delectus facere minima repudiandae?
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Home;
