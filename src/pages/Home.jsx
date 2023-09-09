import { myAvatar } from '../assets';
import { github } from '../assets';
import { linkedin } from '../assets';
import { motion } from 'framer-motion';
import { DownloadCV } from '../components';

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: .2,
      },
    },
  }

  const items = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1, transition: {
        type: "tween",
        staggerChildren: 0.25,
        delayChildren: .25,
        duration: ".7",
      },
    },
  }

  return (
    <>
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

        <div className="flex flex-row items-center justify-start gap-8 mx-auto my-5 md:gap-5 md:mx-auto md:my-4">
          <motion.div variants={items}><img className="avatar-img dark:opacity-90 dark:hover:opacity-100 transition duration-150 ease-linear dark:grayscale"
            src={myAvatar} alt="portfolio avatar" />
          </motion.div>
          <motion.div variants={items} className="flex flex-col gap-3 justify-center md:items-start md:gap-[10px]">
            <a className="home-links" href="https://github.com/MuradIsayev" target='_blank'>
              <img
                className="h-[28px] md:h-[21px]"
                src={github}
                alt="github logo"
              />
              <p className="md:text-[.65rem]">My Github</p>
            </a>
            <a
              target='_blank'
              className="home-links "
              href="https://www.linkedin.com/in/mi03/"
            >
              <img
                className="h-[28px] md:h-[21px]"
                src={linkedin}
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

        <motion.div variants={items}>
          <DownloadCV />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Home;
