import NavBar from '../NavBar/NavBar';
import ProjectAbout from './ProjectCard';
import './About.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/projects').then(response => {
      setProject(response.data);
    });
  }, []);
  let i = 0;
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

        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg aria-hidden="true" className="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </span>
            <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2022 ‑ Apr 2023</time>
            <div className='flex gap-1 items-end'>
              <span className="text-base font-semibold text-gray-900 dark:text-white">Software Developer</span>
              <span className="text-[.87rem] font-medium text-gray-700 dark:text-gray-400">at</span>
              <span className="text-[.87rem] font-medium text-gray-700 dark:text-gray-400">UFAZ</span>
              <span className="text-[.87rem] font-medium text-gray-700 dark:text-gray-400">·</span>
              <span className="text-[.87rem] font-medium text-gray-700 dark:text-gray-400">Part-time</span>
            </div>
            <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">Helped developing a full‑stack application for Enterprise Resource Planning and Learning Management System using modern programming languages
              and frameworks, completed all the tasks which were assigned by the project manager during the sprint, and implementing the small and large functionalities of the system</p>
          </li>
        </ol>

        {/* <div className="flex flex-row flex-wrap justify-start gap-y-[4%] gap-x-[2%] mt-8 w-[94%] h-[100%]
        md:flex-col md:flex-nowrap md:justify-start md:w-auto md:gap-y-[2%]">
          {project?.map(({ name, description, skills, url }) => {
            return (
              <ProjectAbout
                name={name}
                description={description}
                skills={skills}
                url={url}
                testValue={i += 3}
              />
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default About;
