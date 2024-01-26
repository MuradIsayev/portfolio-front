import { motion } from 'framer-motion';
import { items } from '../assets/animations/transitions';

const Skills = ({ skills }) => {
  return (
    <div className='flex flex-wrap project-skills'>
      {skills.map((skill) => (
        <div key={skill?.id} className='pr-2 font-semibold md:font-medium skill text-neutral-600 dark:text-neutral-400'>
          <p className="text-[.72rem] md:text-[.68rem]">{skill?.name}</p>
        </div>
      ))}
    </div>
  )
}

const ProjectCard = ({ name, description, url, skills, color, darkColor, animationValue }) => {

  return (
    <motion.div
      variants={items}
      initial={{
        opacity: 0,
        translateX: animationValue % 2 === 0 ? 120 : -120,
      }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: .4, delay: animationValue * 0.2, ease: 'linear' }}
      className="grow w-[40%] min-w-[310px] column dark:hover:opacity-90 opacity-95 dark:opacity-90 hover:opacity-100">
      <div className={` hover:bg-[#f7f7f7ea] dark:bg-[#09090B] hover:dark:bg-[#111113dc] border border-[#E4E4E7] dark:border-[#27272A] group min-h-[170px] md:min-h-[160px] card ${darkColor} ${color}`}>
        <div className="txt dark:text-[#fafafa] text-[#09090B]">
          <h1 className='project-name text-xl md:text-lg font-[300] uppercase text-neutral-600 dark:text-neutral-400 dark:group-hover:text-[#fafafa] group-hover:text-[#09090B]'>{name}</h1>
          <p className='text-[.7rem] md:text-[.65rem] project-desc text-neutral-600 dark:text-neutral-400 '>{description}</p>
          <Skills skills={skills} />
        </div>
        <div>
          <a href={url} className='project-link font-normal text-neutral-600 dark:text-neutral-400 group-hover:text-[#09090B] dark:group-hover:text-[#fafafa] group-hover:animate-pulse' target='_blank'>more</a>
          <span className="absolute opacity-0 group-hover:bg-[#09090B] dark:group-hover:bg-[#fafafa] bottom-[1.35rem] ml-3 left-[60px] w-6 h-[1px] group-hover:opacity-100
        transition ease-linear duration-150"></span>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
