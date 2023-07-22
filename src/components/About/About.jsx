import NavBar from '../NavBar/NavBar';
import ProjectAbout from './ProjectCard';
import './About.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import JobTimeLine from './JobTimeLine';
import './projects.scss';
import { BsServer } from 'react-icons/bs';
import { DiReact } from 'react-icons/di';


const About = () => {
  const darkColors = ['dark:bg-d-card-1', 'dark:bg-d-card-2', 'dark:bg-d-card-3', 'dark:bg-d-card-4', 'dark:bg-d-card-5', 'dark:bg-d-card-6', 'dark:bg-d-card-7'];
  const colors = ['bg-l-card-1', 'bg-l-card-2', 'bg-l-card-3', 'bg-l-card-4', 'bg-l-card-5', 'bg-l-card-6', 'bg-l-card-7'];

  const [project, setProject] = useState([]);
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/projects`).then(response => {
      setProject(response.data);
    });

    axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/experience`).then(response => {
      setExperience(response.data);
    });
  }, []);

  return (
    <div className="main-container">
      <div className="navbar-container">
        <NavBar />
      </div>
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
            {experience.map(({ position, description, startedAt, endedAt, company, workScheduleType }) => {
              return (
                <JobTimeLine
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
          {project?.map(({ id, name, description, skills, url }, index) => {
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
    </div >
  );
}

export default About;
