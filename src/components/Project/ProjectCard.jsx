import { motion } from 'framer-motion';
import { items } from '../../assets/animations/transitions';
import { link, darkLink } from '../../assets';
import { animateLink } from '../../assets/animations/transitions';
import { useThemeStore } from '../../store/useThemeDark';


const Skills = ({ skills }) => {
  return (
    <div className='flex flex-wrap gap-[6px] md:gap-1 project-skills'>
      {skills.map((skill) => (
        <div key={skill?.id} className='font-semibold md:font-medium skill text-neutral-600 dark:text-neutral-400'>
          <p className="text-[.65rem] md:text-[.53rem]">{skill?.name}</p>
        </div>
      ))}
    </div>
  )
}

const ProjectCard = ({ name, description, url, skills, color, darkColor, animationValue }) => {
  const { isThemeDark } = useThemeStore();

  return (
    <motion.div
      variants={items}
      initial={{
        opacity: 0,
        translateX: animationValue % 2 === 0 ? 120 : -120,
      }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: .4, delay: animationValue * 0.2, ease: 'linear' }}
      className="grow w-[35%] min-w-[290px] column dark:hover:opacity-90 opacity-95 dark:opacity-90 hover:opacity-100">
      <div
        // initial="initial"
        // animate="initial"
        // whileHover="animateLink"
        className={`hover:bg-[#f7f7f7ea] dark:bg-[#09090B] hover:dark:bg-[#111113dc] border border-[#E4E4E7] dark:border-[#27272A] group min-h-[160px] md:min-h-[150px] card ${darkColor} ${color}`}>
        <div className="txt dark:text-[#fafafa] text-[#09090B]">
          <h1 className='dark:bg-[#09090B] bg-white group-hover:bg-transparent !duration-0 project-name text-[1.15rem] md:text-base font-[300] uppercase text-neutral-600 dark:text-neutral-400 dark:group-hover:text-[#fafafa] group-hover:text-[#09090B]'>{name}</h1>
          <p className='text-[.75rem] md:text-[.65rem] project-desc text-neutral-600 dark:text-neutral-400 '>{description}</p>
          <Skills skills={skills} />
        </div>
        <div
        // variants={animateLink}
        >
          <a href={url} className='opacity-75 right-[1.1rem] bottom-[1.1rem] absolute dark:opacity-50 project-link group-hover:opacity-100 dark:group-hover:opacity-90 group-hover:animate-pulse' target='_blank'>
            <img src={isThemeDark ? link : darkLink} alt='link' className='w-[18px] h-[18px] md:w-4 md:h-4' />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
