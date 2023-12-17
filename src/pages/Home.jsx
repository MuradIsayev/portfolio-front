import { myAvatar } from '../assets';
import { github } from '../assets';
import { linkedin } from '../assets';
import { darkLinkedin } from '../assets';
import { whiteGithub } from '../assets';
import { motion } from 'framer-motion';
import { DownloadCV } from '../components';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import { isThemeChangedStore } from '../store/useIsThemeChanged';
import { container, items } from '../assets/animations/transitions';


const Home = () => {
  const [getIsDarkTheme] = useLocalStorage("dark-theme");
  const isThemeChanged = isThemeChangedStore();
  const [isThemeDark, setIsThemeDark] = useState(() => getIsDarkTheme())

  useEffect(() => {
    setIsThemeDark(getIsDarkTheme())
  }, [isThemeChanged])


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
          <motion.div variants={items}><img className="transition duration-150 ease-linear avatar-img dark:opacity-90 dark:hover:opacity-100 dark:grayscale"
            src={myAvatar} alt="portfolio avatar" />
          </motion.div>
          <motion.div variants={items} className=" flex flex-col gap-3 justify-center md:items-start md:gap-[10px]">
            <a className="home-links group" href="https://github.com/MuradIsayev" target='_blank' >
              <img
                className="group-hover:-translate-y-0.5 transition-all duration-200 h-[28px] md:h-[21px]"
                src={isThemeDark ? whiteGithub : github}
                alt="github logo"
              />
              <p className="md:text-[.65rem]">My Github</p>
            </a>
            <a
              target='_blank'
              className="home-links group"
              href="https://www.linkedin.com/in/mi03/"
            >
              <img
                className="h-[28px] md:h-[21px] group-hover:-translate-y-0.5 transition-all duration-200"
                src={isThemeDark ? linkedin : darkLinkedin}
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
