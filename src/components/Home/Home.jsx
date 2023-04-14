import NavBar from '../NavBar/NavBar';
import avatar from '../../assets/avatar.svg';
import bluegithub from '../../assets/bluegithub.svg';
import darkgithub from '../../assets/darkgithub.svg';
import bluelinkedin from '../../assets/bluelinkedin.svg';
import darklinkedin from '../../assets/darklinkedin.svg';
import { motion } from 'framer-motion';

function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: .9,
      },
    },
  }

  const items = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1, transition: {
        type: "tween",
        staggerChildren: 0.2,
        delayChildren: .7,
        duration: ".8",
      },
    },
  }

  return (
    <div className="main-container">
      <div className="navbar-container home-navbar-class-block">
        <NavBar />
      </div>
      <motion.div variants={container}
        initial="hidden"
        animate="show"
        className="mt-32 w-[90%] md:w-[auto] md:mt-20">
        <motion.h2 variants={items}
          className='headers'>Filankəs</motion.h2>
        <motion.p variants={items}
          className="home-texts">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
          asperiores
        </motion.p>
        <div className="flex flex-row items-center justify-start gap-7 mx-auto my-6 md:flex-col md:items-start md:justify-start md:gap-4 md:mx-auto md:my-4">
          <motion.img variants={items} className="avatar-img"
            src={avatar} alt="portfolio avatar" />
          <div className="flex flex-col gap-3 justify-center md:items-start md:gap-2">
            <motion.a variants={items} className="home-links" href="https://github.com/MuradIsayev">
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
              <motion.p className="md:text-[.65rem]" initial={{ scale: 0 }}
                animate={{ scale: 1, }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15
                }}>My Github</motion.p>
            </motion.a>
            <motion.a variants={items}
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
              <motion.p className="md:text-[.65rem]" initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15
                }}>My LinkedIn</motion.p>
            </motion.a>
          </div>
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
