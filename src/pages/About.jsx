import { ProjectCard } from '../components';
import { JobTimeLine } from '../components';
import '../styles/projects.scss';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { fetchExperiences, fetchProjects } from '../api/about';
import { cardContainer, container, items } from '../assets/animations/transitions';


const About = () => {
  const { data: experiences } = useQuery({ queryKey: ['experiences'], queryFn: fetchExperiences, }, { staleTime: 3000 })
  const { data: projects } = useQuery({ queryKey: ['projects'], queryFn: fetchProjects }, { staleTime: 3000 })

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-start w-[90%] mt-[7.3rem] md:mt-20 md:w-auto"
      >
        <div className='mb-4'>
          <motion.h2 variants={items} className='headers'>About Me</motion.h2>
          <motion.p variants={items} className='home-texts'>
            My journey began in backend development, but I've since expanded my skills to embrace frontend technologies as well.
            Now, I am working on myself, to be a solid one.
            Here's what I have done so far.
          </motion.p>
        </div>

        <div>
          <motion.ol variants={container}
            className="relative border-l border-neutral-600 dark:border-neutral-400">
            {experiences?.map(({ position, description, startedAt, endedAt, company, workScheduleType }, index) => {
              return (
                <JobTimeLine
                  key={index}
                  position={position}
                  description={description}
                  startedAt={startedAt}
                  endedAt={endedAt}
                  company={company}
                  workScheduleType={workScheduleType}
                />
              )
            }
            )}
          </motion.ol>
        </div>

        <motion.div
          variants={cardContainer}
          className="flex flex-row flex-wrap gap-x-3 gap-y-5 w-[75%] md:w-full mb-5">
          {projects?.map(({ name, description, skills, url }, index) => {
            return (
              <ProjectCard
                key={index}
                name={name}
                description={description}
                skills={skills}
                url={url}
                animationValue={index += 1}
              />
            );
          })}
        </motion.div >
      </motion.div >
    </>
  );
}

export default About;
