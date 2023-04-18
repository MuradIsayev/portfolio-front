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
        className="flex flex-col justify-start w-[90%] mt-32 md:mt-20 md:w-auto"
      >
        <h2 className='headers'>About</h2>
        <p className='home-texts'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
          itaque asperiores vitae deleniti praesentium odio perferendis, fuga
          sapiente quidem sed delectus facere minima repudiandae?
        </p>

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
        </div>
      </div>
    </div>
  );
}

export default About;
