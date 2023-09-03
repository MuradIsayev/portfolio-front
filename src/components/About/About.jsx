import ProjectAbout from './ProjectCard';
import './About.css';
import JobTimeLine from './JobTimeLine';
import './projects.scss';
import { BsServer } from 'react-icons/bs';
import { DiReact } from 'react-icons/di';
import { useQuery } from '@tanstack/react-query';
import { fetchExperiences, fetchProjects } from '../../api/about';


const About = () => {
  const darkColors = ['dark:bg-d-card-1', 'dark:bg-d-card-2', 'dark:bg-d-card-3', 'dark:bg-d-card-4', 'dark:bg-d-card-5', 'dark:bg-d-card-6', 'dark:bg-d-card-7'];
  const colors = ['bg-l-card-1', 'bg-l-card-2', 'bg-l-card-3', 'bg-l-card-4', 'bg-l-card-5', 'bg-l-card-6', 'bg-l-card-7'];

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
        <div class="flex flex-row flex-wrap gap-x-3 gap-y-5 max-w-[82%] md:flex-col mb-5 ">
          {projects?.map(({ id, name, description, skills, url }, index) => {
            const color = colors[index % colors.length];
            const darkColor = darkColors[index % darkColors.length];
            return (
              <ProjectAbout
                key={id}
                name={name}
                description={description}
                skills={skills}
                url={url}
                color={color}
                darkColor={darkColor}
              />
            );
          })}
        </div >
      </div >
    </>
  );
}

export default About;
