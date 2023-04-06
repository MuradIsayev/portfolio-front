import '../NavBar/navbar-cont.css';
import NavBar from '../NavBar/NavBar';
import ProjectAbout from './ProjectCard';
import './About.css';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../App';
import axios from 'axios';

function About() {
  const [project, setProject] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/projects').then(response => {
      setProject(response.data);
    });
  }, []);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="main-container">
      <div className="navbar-container about-navbar-class-block">
        <NavBar />
      </div>
      <div
        className="about-container"
        id={theme}
        style={{ backgroundColor: 'transparent' }}
      >
        <h2>About</h2>
        <p className='home-texts'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut
          itaque asperiores vitae deleniti praesentium odio perferendis, fuga
          sapiente quidem sed delectus facere minima repudiandae?
        </p>

        <div className="projects-container">
          {project?.map(({ name, description, skills, url }) => {
            return (
              <ProjectAbout
                name={name}
                description={description}
                skills={skills}
                url={url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
