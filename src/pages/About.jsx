import { ProjectCard } from '../components';
import { JobTimeLine } from '../components';
import '../styles/projects.scss';
import { BsServer } from 'react-icons/bs';
import { DiReact } from 'react-icons/di';
import { useQuery } from '@tanstack/react-query';
import { fetchExperiences, fetchProjects } from '../api/about';


const About = () => {
  const { data: experiences } = useQuery({ queryKey: ['experiences'], queryFn: fetchExperiences, }, { staleTime: 3000 })
  const { data: projects } = useQuery({ queryKey: ['projects'], queryFn: fetchProjects }, { staleTime: 3000 })

  return (
    <>
      <div
        className="flex flex-col justify-start w-[90%] mt-[7.3rem] md:mt-20 md:w-auto"
      >
        <div className='mb-4'>
          <h2 className='headers'>About</h2>
          <p className='home-texts'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
            itaque asperiores vitae deleniti praesentium odio perferendis, fuga
            sapiente quidem sed delectus facere minima repudiandae?
          </p>
        </div>

        <div>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
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
          </ol>
        </div>
        <div className="flex flex-row flex-wrap gap-x-3 gap-y-5 max-w-[82%] md:flex-col mb-5 ">
          {projects?.map(({ id, name, description, skills, url }, index) => {
            return (
              <ProjectCard
                key={index}
                name={name}
                description={description}
                skills={skills}
                url={url}
              />
            );
          })}
        </div >
      </div >
    </>
  );
}

export default About;
