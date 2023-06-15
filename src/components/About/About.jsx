import NavBar from '../NavBar/NavBar';
import ProjectAbout from './ProjectCard';
import './About.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import JobTimeLine from './JobTimeLine';
import './projects.scss';
import { BsServer } from 'react-icons/bs';

const About = () => {
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

        {/*
        <div className="flex flex-row flex-wrap justify-start gap-y-[4%] gap-x-[2%] mt-8 w-[94%] h-[100%]
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
        <div class="flex flex-row flex-wrap gap-x-3 gap-y-5 w-[82%] mb-5 ">
          <div class="w-[44%] column">
            <div class="card bg-dark-card-1">
              <div class="txt">
                <h1>BRANDING AND<br />
                  CORPORATE DESIGN</h1>
                <p>Visual communication and problem-solving</p>
              </div>
              <a href="#">more</a>
              <div class="ico-card">
                <i class="fa fa-rebel"></i>
              </div>
            </div>
          </div>
          <div class="w-[44%] column">
            <div class="card bg-dark-card-2">
              <div class="txt">
                <h1>Web Front-End<br />
                  SOLUTIONS</h1>
                <p>How design is implemented on the web.</p>
              </div>
              <a href="#">more</a>
              <div class="ico-card">
                <i class="fa fa-codepen"><BsServer /></i>
              </div>
            </div>
          </div>
          <div class="w-[44%] column">
            <div class="card bg-dark-card-3">
              <div class="txt">
                <h1>Web Front-End <br />
                  SOLUTIONS</h1>
                <p>How design is implemented on the web.</p>
              </div>
              <a href="#">more</a>
              <div class="ico-card">
                <i class="fa fa-codepen"></i>
              </div>
            </div>
          </div>
          <div class="w-[44%] column">
            <div class="card bg-dark-card-4">
              <div class="txt">
                <h1>Web Front-End <br />
                  SOLUTIONS</h1>
                <p>How design is implemented on the web.</p>
              </div>
              <a href="#">more</a>
              <div class="ico-card">
                <i class="fa fa-codepen"></i>
              </div>
            </div>
          </div>
        </div >
      </div >
    </div >
  );
}

export default About;
