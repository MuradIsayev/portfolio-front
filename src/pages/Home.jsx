import { avatar, github, linkedin, darkLinkedin, whiteGithub } from '../assets';
import { motion } from 'framer-motion';
import { DownloadCV } from '../components';
import { useThemeStore } from '../store/useThemeDark';
import { container, items } from '../assets/animations/transitions';


const Home = () => {
  const { isThemeDark } = useThemeStore();

  return (
    <motion.div variants={container} className='lg:max-w-[60%] max-w-[70%] md:max-w-full'
      initial="hidden"
      animate="show">
      <motion.h2 variants={items}
        className='headers'>Murad Isayev</motion.h2>
      <motion.p variants={items}
        className="home-texts">
        Welcome. Take a glimpse at my Portfolio.
      </motion.p>

      <div className="flex flex-row items-center justify-start gap-8 mx-auto my-5 md:gap-5 md:mx-auto md:my-4">
        <motion.div variants={items}>
          <img className='avatar-img'
            src={avatar} alt="portfolio avatar" />
        </motion.div>
        <motion.div variants={items} className=" flex flex-col justify-center md:items-start gap-[10px] md:gap-2">
          <a className="home-links group" href="https://github.com/MuradIsayev" target='_blank' >
            <img
              className="group-hover:-translate-y-1 transition-all duration-300 h-[30px] lg:h-[32px] md:h-[23px]"
              src={isThemeDark ? whiteGithub : github}
              alt="github logo"
            />
            <p className="md:text-[.6rem] text-[.85rem] home-texts font-medium text-neutral-600 dark:text-neutral-400">My Github</p>
          </a>
          <a
            target='_blank'
            className="home-links group"
            href="https://www.linkedin.com/in/mi03/"
          >
            <img
              className="h-[30px] md:h-[23px] lg:h-[32px] group-hover:-translate-y-1 transition-all duration-300"
              src={isThemeDark ? linkedin : darkLinkedin}
              alt="linkedin logo"
            />
            <p className="md:text-[.6rem] text-[.85rem] home-texts font-medium text-neutral-600 dark:text-neutral-400">My LinkedIn</p>
          </a>
        </motion.div>
      </div >
      <motion.p variants={items} className="home-texts">
        I’m a Software Engineer and M.Sc student in Global Software Development at Fulda University of Applied Sciences, located in Fulda, Germany.
        My long-term goal is to become a Software Engineer who builds products and services with the purpose of making a difference in people's lives. <br />Download my CV to learn more.
      </motion.p>

      <motion.div variants={items}>
        <DownloadCV />
      </motion.div>
    </motion.div >
  );
}

export default Home;
